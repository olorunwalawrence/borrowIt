import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as TP from '../Styles/Topnav';

export const TopNav = () => {
	return (
		<TP.TopNav>
			<TP.NavContainer>
				<TP.para>
					<TP.WelcomeText Display="none">Easy Funds</TP.WelcomeText>
				</TP.para>

				<TP.Container>
					<TP.Span>
						<Link to="/signup">Signup</Link>
					</TP.Span>
					<TP.Span>
						<Link to="/login">Login</Link>
					</TP.Span>
				</TP.Container>
			</TP.NavContainer>
		</TP.TopNav>
	);
};
