import React, { Fragment } from 'react';
import { About } from '../components/aboutUs';
import { Navigation } from '../components/Nav';
import { Footer } from '../components/footer';

export const AboutUs = () => {
	return (
		<Fragment>
			<Navigation />
			<About />
			<Footer />
		</Fragment>
	);
};
