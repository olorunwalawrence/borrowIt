import React, { Fragment } from 'react';
import { Dashboard } from '../components/dashBoard';
import { Navigation } from '../components/Nav';
import { Footer } from '../components/footer';

export const AccountDashboard = () => {
	return (
		<Fragment>
			<Navigation />
			<Dashboard />
			<Footer />
		</Fragment>
	);
};
