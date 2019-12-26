import React, { Fragment } from 'react';
import * as SH from '../Styles/search';

export const Search = () => {
	return (
		<Fragment>
			<SH.Container>
				<SH.Input type="text" placeholder="search for ......" />
				<SH.Bottom>Go !</SH.Bottom>
			</SH.Container>
		</Fragment>
	);
};
