import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing } from '../src/pages/landing';
import { Signup } from '../src/pages/Signup';
import { creditCardListingPage } from '../src/pages/creditCardListing';
import { Login } from '../src/pages/login';
import { SinglePageCard } from '../src/pages/singleCard';
import { CashLoan } from '../src/pages/loan';
import { AboutUs } from '../src/pages/aboutUs';
import { Dashboards } from '../src/pages/dashboard';
import { AccountDashboard } from '../src/pages/account';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/signup" component={Signup} />
				<Route path="/credit-card" component={creditCardListingPage} />
				<Route path="/login" component={Login} />
				<Route path="/card-single" component={SinglePageCard} />
				<Route path="/loan" component={CashLoan} />
				<Route path="/about-us" component={AboutUs} />
				<Route path="/dashboard" component={Dashboards} />
				<Route path="/account" component={AccountDashboard} />
			</Switch>
		</Router>
	);
}

export default App;
