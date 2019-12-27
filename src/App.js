import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing } from '../src/pages/landing';
import { Signup } from '../src/pages/Signup';
import { Login } from '../src/pages/login';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
