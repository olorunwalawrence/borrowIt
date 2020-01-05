import React, { Fragment } from 'react';
import { UserAccount } from '../components/account';
import { Navigation } from '../components/Nav';
import { Footer } from '../components/footer';
import { TopNav } from '../components/TopNav';

export const AccountDashboard = () => {
	return (
		<Fragment>
			<TopNav />
			<UserAccount />
		</Fragment>
	);
};
