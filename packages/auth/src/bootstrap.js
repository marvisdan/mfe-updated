import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
// Mount function to start up this app

const mount = (el,) => {
	const root = createRoot(el)
	root.render(
		<App />
	);
};
// if we are in development and in isolation
// call mount immediatly

if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_auth-dev-root");
	if (devRoot) {
		mount(devRoot);
	}
}
// We are running through the container and we should export the mount function

export { mount };
