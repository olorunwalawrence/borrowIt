import React, { Fragment } from 'react';
import * as CL from '../Styles/loan';
import * as SD from '../Styles/singleCard';
import * as FM from '../Styles/form';

export const Loan = () => {
	return (
		<Fragment>
			<SD.BannerWrapper>
				<SD.banner></SD.banner>
			</SD.BannerWrapper>

			<CL.FormContainer>
				<CL.formWrapper>
					<CL.Div align="center" marginBottom="40px" size="1.5rem" color="#15549a">
						To get a Loan kindly Fill the Form Below
					</CL.Div>
					<CL.Div width="70%" margin="1px auto" marginTop="70px" background="#f8f9fa" padding="20px">
						<FM.Form>
							<CL.FormRow className="form-row">
								<CL.Div className="form-group col-md-6">
									<FM.label for="email">Email</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Email" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="password">Email</FM.label>
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
									<FM.label for="State">State</FM.label>
									<FM.Input type="text" className="form-control" placeholder="State" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="State">State</FM.label>
									<FM.Input type="text" className="form-control" placeholder="State" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="State">State</FM.label>
									<FM.Input type="text" className="form-control" placeholder="State" />
								</CL.Div>
							</CL.FormRow>

							<CL.formGroup className="form-group">
								<CL.Div className="form-group col-md-12">
									<FM.label for="address">Address</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Address" />
								</CL.Div>
							</CL.formGroup>
							<CL.formGroup className="form-group">
								<CL.Div className="form-group col-md-12">
									<FM.label for="address">Address</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Address" />
								</CL.Div>
							</CL.formGroup>
							<CL.formGroup className="form-group">
								<CL.Div className="form-group col-md-12">
									<FM.label for="address">Address</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Address" />
								</CL.Div>
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
								Submit Request
							</FM.Button>
						</FM.Form>
					</CL.Div>
				</CL.formWrapper>
			</CL.FormContainer>
		</Fragment>
	);
};
