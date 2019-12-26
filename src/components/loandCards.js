import React from 'react';
import * as LC from '../Styles/loanCards';

export const LoanCards = () => {
	const Loans = [
		{
			img: 'fa fa-home',
			loanRate: '3.74%',
			title: 'HOME LOAN',
		},
		{
			img: 'fa fa-home',
			loanRate: '3.74%',
			title: 'HOME LOAN',
		},
		{
			img: 'fa fa-home',
			loanRate: '3.74%',
			title: 'HOME LOAN',
		},
		{
			img: 'fa fa-home',
			loanRate: '3.74%',
			title: 'HOME LOAN',
		},
	];
	return (
		<LC.cardContainer>
			{Loans.map(loan => (
				<LC.cards>
					<LC.FontAwesome className={loan.img} aria-hidden="true"></LC.FontAwesome>
					<LC.Diviver>
						<LC.LoanRate>{loan.loanRate}</LC.LoanRate>
						<LC.RateTitle>{loan.title}</LC.RateTitle>
					</LC.Diviver>
				</LC.cards>
			))}
		</LC.cardContainer>
	);
};
