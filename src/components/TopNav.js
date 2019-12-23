import React, { Fragment } from 'react';
import * as TP from '../Styles/Topnav';
import { Link } from 'react-router-dom';

export const TopNav = () => {
	return (
		<TP.TopNav>
			<TP.para>
				<TP.WelcomeText Display="none">Welcome to our Borrow Load Website</TP.WelcomeText>
			</TP.para>

			<TP.Container>
				<TP.Span>View Location</TP.Span>
				<TP.Span>+2347015009775</TP.Span>
			</TP.Container>
		</TP.TopNav>
	);
};
