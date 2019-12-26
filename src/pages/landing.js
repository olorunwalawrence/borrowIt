import React, { Fragment, useState } from 'react';
import { TopNav } from '../components/TopNav';
import { Navigation } from '../components/Nav';
import { LoanCards } from '../components/loandCards';
import { Slider } from '../components/carousel';
import { Applicationprocess } from '../components/applicationProcess';

import { Footer } from '../components/footer';
export const Landing = () => {
	return (
		<Fragment>
			<Navigation />
			<LoanCards />
			<Slider />
			<Applicationprocess />

			<Footer />
		</Fragment>
	);
};
