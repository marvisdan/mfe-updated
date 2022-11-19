import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Signin from "./components/Signin";
import SignUp from "./components/Signup";

// MuiClassNameSetup.js
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure((componentName) => `au-${componentName}`);

const App = ({ onSignIn }) => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/auth/signin" element={<Signin onSignIn={onSignIn} />}>

					</Route>
					<Route path="/auth/signup" element={<SignUp onSignIn={onSignIn} />}>

					</Route>
				</Routes>
			</BrowserRouter>
		</div >
	);
};

export default App;
