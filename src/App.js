import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing } from '../src/pages/landing';
import { Signup } from '../src/pages/Signup';
import { BorrowCard } from './components/borrowCard';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/signup" component={Signup} />
				<Route path="/borrow" component={BorrowCard} />
			</Switch>
		</Router>
	);
}

export default App;
