import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as SI from '../Styles/login';

export const LoginAuthentication = () => {
	// React Hooks
	// const [authLogin, setAuthLogin] = useState({});

	// const handleChange = e => setAuthLogin({ ...authLogin, [e.target.name]: e.target.value });

	return (
		<SI.signupContainer>
			<SI.SignupLeft>
				<SI.SiteLogo></SI.SiteLogo>
			</SI.SignupLeft>

			<SI.Signupright>
				<SI.SignupRightContainer>
					<SI.Div>Welcome Back!</SI.Div>

					<SI.SignupHeadText>
						Don't have an account? <Link to="/signup">Sign Up </Link>
					</SI.SignupHeadText>
					<SI.Form>
						<SI.formRow className="form-row">
							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="text"
									name="dataField"
									placeholder="Email or Phone Number"
									class="form-control"
									// onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>

							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="password"
									name="password"
									placeholder="Password"
									class="form-control"
									// onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>
						</SI.formRow>
						<SI.SignupBotton type="button">Login</SI.SignupBotton>
					</SI.Form>
					<SI.ForgetPassword>
						<Link to="/forgetpassword">Forget Password</Link>
					</SI.ForgetPassword>
				</SI.SignupRightContainer>
			</SI.Signupright>
		</SI.signupContainer>
	);
};
