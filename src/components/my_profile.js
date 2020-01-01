import React, { Fragment } from 'react';
import * as MP from '../Styles/myProfile';
import { profile } from '../data/data';
export const MyProfile = props => {
	return (
		<MP.profileContainer>
			<MP.profileWrapper>
				{/* <MP.Header>My Profile</MP.Header> */}
				{profile.map(data => (
					<Fragment>
						<MP.Img src={data.img} alt="my profile image" />
						<table class="table">
							<thead>
								<tr>
									<th>First Name</th>
									<td>{data.firstname}</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="col">Last Name</th>
									<td>{data.lastname}</td>
								</tr>
								<tr>
									<th scope="row">Maiden Name</th>
									<td>{data.maidenname}</td>
								</tr>
								<tr>
									<th scope="row">BVN</th>
									<td>{data.Bvn}</td>
								</tr>
								<tr>
									<th scope="row">Email</th>
									<td>{data.email}</td>
								</tr>
								<tr>
									<th scope="row">password</th>
									<td>{data.password}</td>
								</tr>
								<tr>
									<th scope="row">City</th>
									<td>{data.city}</td>
								</tr>
								<tr>
									<th scope="row">state</th>
									<td>{data.state}</td>
								</tr>
								<tr>
									<th scope="row">Country</th>
									<td>{data.country}</td>
								</tr>
								<tr>
									<th scope="row">Loan Type</th>
									<td>{data.loantype.creditcard}</td>
								</tr>
								<tr>
									<th scope="row">Amount</th>
									<td>{data.amount}</td>
								</tr>
								<tr>
									<th scope="row">year</th>
									<td>{data.year}</td>
								</tr>
								<tr>
									<th scope="row">Office Address</th>
									<td>{data.officeaddress}</td>
								</tr>
								<tr>
									<th scope="row">Address</th>
									<td>{data.address}</td>
								</tr>
							</tbody>
						</table>
					</Fragment>
				))}
			</MP.profileWrapper>
		</MP.profileContainer>
	);
};
