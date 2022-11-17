import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Signin from "./components/Signin";
import SignUp from "./components/Signup";

// MuiClassNameSetup.js
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure((componentName) => `au-${componentName}`);

const App = ({ history, onSignIn }) => {
	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route path="/auth/signin">
						<Signin onSignIn={onSignIn} />
					</Route>
					<Route path="/auth/signup">
						<SignUp onSignIn={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</div >
	);
};

export default App;
