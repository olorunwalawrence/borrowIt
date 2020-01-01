import React from 'react';
import * as TR from '../Styles/transactions';
import { Transaction } from '../data/data';

export const Transactions = () => {
	return (
		<TR.Container>
			{Transaction.map(data => (
				<TR.Wrapper>
					<table class="table">
						<thead>
							<tr>
								<th>card Number</th>
								<td>{data.cardnumber}</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="col">Date</th>
								<td>{data.date}</td>
							</tr>
							<tr>
								<th scope="row">Amount Spent</th>
								<td>{data.amountspent}</td>
							</tr>
							<tr>
								<th scope="row">Balance</th>
								<td>{data.balance}</td>
							</tr>
						</tbody>
					</table>
				</TR.Wrapper>
			))}
		</TR.Container>
	);
};
