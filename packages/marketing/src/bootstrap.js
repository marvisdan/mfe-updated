import React from "react";
import { createRoot } from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";
// Mount function to start up this app

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
	const history = defaultHistory
		? defaultHistory
		: createMemoryHistory({
			initialEntries: [initialPath]
		});
	if (onNavigate) {
		history.listen(onNavigate);
	}

	const root = createRoot(el)
	root.render(<App history={history} />);

	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;
			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		}
	};
};
// if we are in development and in isolation
// call mount immediatly

if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_marketing-dev-root");
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}
// We are running through the container and we should export the mount function

export { mount };
