import React from 'react';
import * as AC from '../Styles/myaccount';
import { Account } from '../data/data';

export const MyAccount = () => {
	return (
		<AC.Container>
			<AC.Wrapper>
				{Account.map(data => (
					<table class="table">
						<thead>
							<tr>
								<th>Account Name</th>
								<td>{data.accountname}</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="col">Account Type</th>
								<td>{data.accounttype}</td>
							</tr>
							<tr>
								<th scope="row">Card Number</th>
								<td>{data.cardnumber}</td>
							</tr>
							<tr>
								<th scope="row">Registration Data</th>
								<td>{data.registrationdate}</td>
							</tr>
							<tr>
								<th scope="row">BVN</th>
								<td>{data.bvn}</td>
							</tr>
							<tr>
								<th scope="row">Loan Type</th>
								<td>{data.loantype}</td>
							</tr>
							<tr>
								<th scope="row">Balance</th>
								<td>{data.balance}</td>
							</tr>
						</tbody>
					</table>
				))}
			</AC.Wrapper>
		</AC.Container>
	);
};
