import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import * as Acct from '../Styles/account';
import * as CL from '../Styles/loan';
import * as FM from '../Styles/form';
import { HarmBurger } from '../components/hambugger/hamBurger';
import { Account } from '../data/data';
export const UserAccount = () => {
	const columns = [
		{
			dataField: 'id',
			text: 'Account',
		},
		{
      dataField: 'accountname',
			text: 'Account Name',
		},
		{
			dataField: 'accounttype',
			text: 'account Type',
		},
		{
			dataField: 'cardnumber',
			text: 'Card Number',
		},
		{
			dataField: 'registrationdate',
			text: 'Registration Date',
		},
		{
			dataField: 'cardType',
			text: 'Card Type',
		},
		{
			dataField: 'loantype',
			text: 'Loan Type',
		},
		{
			dataField: 'paymentStatus',
			text: 'Payment Status',
		},
	];
	return (
		<Acct.container>
			<Acct.Div>
				<HarmBurger />
			</Acct.Div>

			<Acct.wrapper width="80%" margin="0px auto">
				<Acct.Header>My Account Details</Acct.Header>
				<BootstrapTable keyField="id" data={Account} columns={columns} />

				<CL.FormContainer>
					<CL.formWrapper>
						<CL.Div align="center" marginBottom="40px" size="1.5rem" color="#15549a">
							Update my Profile
						</CL.Div>
						<CL.Div width="90%" margin="1px auto" marginTop="70px" background="#f8f9fa" padding="20px">
							<FM.Form>
								{/* <Acct.Input type="file" className="form-control" accept="image/*" /> */}
								<CL.FormRow className="form-row">
									<CL.Div className="form-group col-md-6">
										<FM.label for="email">first Name</FM.label>
										<FM.Input type="text" className="form-control" placeholder="First Name" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="email">first Name</FM.label>
										<FM.Input type="text" className="form-control" placeholder="First Name" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="email">Last Name</FM.label>
										<FM.Input type="text" className="form-control" placeholder="Last Name" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="email">Maiden Name</FM.label>
										<FM.Input type="text" className="form-control" placeholder="Maiden Name" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="email">BVN</FM.label>
										<FM.Input type="text" className="form-control" placeholder="BVN Number" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="email">Email</FM.label>
										<FM.Input type="text" className="form-control" placeholder="Email" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="password">Password</FM.label>
										<FM.Input type="text" className="form-control" placeholder="Password" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="City">City</FM.label>
										<FM.Input type="text" className="form-control" placeholder="City" />
									</CL.Div>

									<CL.Div className="form-group col-md-6">
										<FM.label for="State">State</FM.label>
										<FM.Input type="text" className="form-control" placeholder="State" />
									</CL.Div>
									<CL.Div className="form-group col-md-6">
										<FM.label for="country">country</FM.label>
										<FM.Input type="text" className="form-control" placeholder="Country" />
									</CL.Div>

									{/* <CL.Div className="form-group col-md-12">
										<FM.label for="Amount">Amount</FM.label>
										<InputRanges value={value} setValue={setValue} />
									</CL.Div> */}
								</CL.FormRow>
								<CL.formGroup className="form-group">
									<CL.Div className="form-group col-md-12">
										<FM.label for="address">Address</FM.label>
										<FM.Input type="text" className="form-control" placeholder=" Office Address" />
									</CL.Div>
								</CL.formGroup>
								<CL.formGroup className="form-group">
									<CL.Div className="form-group col-md-12"></CL.Div>
								</CL.formGroup>

								<FM.Button
									width="50%"
									fontWeight="500"
									background="#15549a"
									color="white"
									padding="13px"
									align="center"
									size="20px"
									border="none"
								>
									update profile
								</FM.Button>
							</FM.Form>
						</CL.Div>
					</CL.formWrapper>
				</CL.FormContainer>
			</Acct.wrapper>
		</Acct.container>
	);
};
