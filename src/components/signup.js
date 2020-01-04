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
				<Link to="/">Home</Link>
				<SA.SignupHeadText>
					Already have an account? <Link to="/login">Signin </Link>
				</SA.SignupHeadText>
				<SA.Form>
					<SA.formRow className="form-row">
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="firstname"
								placeholder="first Name"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="Lastname"
								placeholder="Last Name"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="Username"
								placeholder="Username"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="email" name="" placeholder="Email" className="form-control" />
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="password" name="" placeholder="Password" className="form-control" />
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="text" name="" placeholder="Country" className="form-control" />
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="text" name="" placeholder="state" className="form-control" />
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="date" name="" placeholder="Date of birth" className="form-control" />
						</SA.formGroup>
						<SA.SignupBotton type="button">sign Up</SA.SignupBotton>
					</SA.formRow>
				</SA.Form>
			</SA.Signupright>
		</SA.signupContainer>
	);
};
