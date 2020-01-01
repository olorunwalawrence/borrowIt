import React, { Fragment } from 'react';

import * as AC from '../Styles/dashBoard';
import * as ABT from '../Styles/aboutUs';
import { MyProfile } from '../components/my_profile';
import { MyAccount } from '../components/my-account';
import { Transactions } from '../components/transactions';
import { UpdateProfile } from '../components/updateProfile';

export const Dashboard = () => {
	return (
		<Fragment>
			<AC.AccountContainer>
				<AC.Wrapper>
					<ABT.banner></ABT.banner>
					<AC.Cover>
						<AC.Div>
							<AC.Header>my Account Dashboard</AC.Header>
						</AC.Div>
						<div class="row">
							<div class="col-3">
								<div
									class="nav flex-column nav-pills"
									id="v-pills-tab"
									role="tablist"
									aria-orientation="vertical"
								>
									<a
										class="nav-link active"
										id="v-pills-home-tab"
										data-toggle="pill"
										href="#v-pills-home"
										role="tab"
										aria-controls="v-pills-home"
										aria-selected="true"
									>
										My Profile
									</a>
									<a
										class="nav-link"
										id="v-pills-profile-tab"
										data-toggle="pill"
										href="#v-pills-profile"
										role="tab"
										aria-controls="v-pills-profile"
										aria-selected="false"
									>
										My Account
									</a>
									<a
										class="nav-link"
										id="v-pills-messages-tab"
										data-toggle="pill"
										href="#v-pills-messages"
										role="tab"
										aria-controls="v-pills-messages"
										aria-selected="false"
									>
										Transactions
									</a>
									<a
										class="nav-link"
										id="v-pills-settings-tab"
										data-toggle="pill"
										href="#v-pills-settings"
										role="tab"
										aria-controls="v-pills-settings"
										aria-selected="false"
									>
										Update Profile
									</a>
									<a
										class="nav-link"
										id="v-pills-settings-tab"
										data-toggle="pill"
										href="#v-pills-settings"
										role="tab"
										aria-controls="v-pills-settings"
										aria-selected="false"
									>
										Loan Payback
									</a>
								</div>
							</div>
							<div class="col-9">
								<div class="tab-content" id="v-pills-tabContent">
									<div
										class="tab-pane fade show active"
										id="v-pills-home"
										role="tabpanel"
										aria-labelledby="v-pills-home-tab"
									>
										<MyProfile />
									</div>
									<div
										class="tab-pane fade"
										id="v-pills-profile"
										role="tabpanel"
										aria-labelledby="v-pills-profile-tab"
									>
										<MyAccount />
									</div>
									<div
										class="tab-pane fade"
										id="v-pills-messages"
										role="tabpanel"
										aria-labelledby="v-pills-messages-tab"
									>
										<Transactions />
									</div>
									<div
										class="tab-pane fade"
										id="v-pills-settings"
										role="tabpanel"
										aria-labelledby="v-pills-settings-tab"
									>
										<UpdateProfile />
									</div>
								</div>
							</div>
						</div>
					</AC.Cover>
				</AC.Wrapper>
			</AC.AccountContainer>
		</Fragment>
	);
};
