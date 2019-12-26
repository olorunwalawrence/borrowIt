import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing } from '../src/pages/landing';

// import { Navigation } from './components/Nav';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
			</Switch>
		</Router>
	);
}

export default App;
