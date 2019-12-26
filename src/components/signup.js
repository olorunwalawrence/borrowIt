import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import * as SA from '../Styles/signup';

import { Link } from 'react-router-dom';

export const SignupAuthentication = () => {
	const history = useHistory();

	const [authSignup, setAuthSignUp] = useState({});

	const handleChange = e => setAuthSignUp({ ...authSignup, [e.target.name]: e.target.value });

	return (
		<SA.signupContainer>
			<SA.SignupLeft>
				<SA.SiteLogo></SA.SiteLogo>
			</SA.SignupLeft>
			<SA.Signupright>
				<SA.SignupHeadText>
					Already have an account? <Link to="/login">Signin </Link>
				</SA.SignupHeadText>
				<SA.Form>
					<SA.formRow className="form-row">
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="username"
								placeholder="username"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="number"
								name="phoneNumber"
								placeholder="Phone Number"
								className="form-control"
							/>
						</SA.formGroup>

						<SA.formGroup className="form-group col-lg-12">
							<SA.FormInput
								type="text"
								name="userAddress"
								placeholder="Full Address"
								className="form-control"
							/>
						</SA.formGroup>

						{/* <SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="deliveryAddress"
								placeholder="Full Address"
								className="form-control"
	
							/>
						</SA.formGroup> */}

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="email" name="email" placeholder="Email" class="form-control" />
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="password" name="password" placeholder="Password" class="form-control" />
						</SA.formGroup>
					</SA.formRow>
					<SA.SignupBotton type="button"></SA.SignupBotton>
				</SA.Form>
			</SA.Signupright>
		</SA.signupContainer>
	);
};
