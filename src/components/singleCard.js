import React from 'react';
import * as SD from '../Styles/singleCard';
import * as DV from '../Styles/borrowcard';
import * as BC from '../Styles/borrowcard';
import { Footer } from '../components/footer';

import { BorrowCard } from '../components/borrowCard';

export const SingleCard = () => {
	return (
		<SD.CardContainer>
			<SD.StyleWrapper>
				<SD.BannerWrapper>
					<SD.banner></SD.banner>
				</SD.BannerWrapper>

				<DV.Div
					width="93%"
					height="auto"
					bgcolor="#fff"
					margin="1px auto"
					position="relative"
					top="-60px"
					marginTop="30px"
					paddingTop="50px"
					padding="50px"
				>
					<SD.SinglecardTop>
						<BC.BorrowWrapper background="#20c997" color="#fff">
							<BorrowCard cardtype={'Money Back'} />
						</BC.BorrowWrapper>
						<div>
							<SD.text>
								<SD.header>Borrow Money Card</SD.header>
								You now don't have to spend more on your Rewards Credit Card to earn extra reward
								points. Simple way to reward your points.
							</SD.text>
						</div>
						<div>
							<SD.BtnAction>Apply Now</SD.BtnAction>
						</div>
					</SD.SinglecardTop>
					<SD.secondSection>
						<SD.Header>Top reasons to get the Rewards Credit Card</SD.Header>

						<BC.Div marginTop="20px">
							<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
							<SD.Span>
								Earn 10 Reward Points for every Rs 125 spent at apparel & department stores and select
								partners.
							</SD.Span>
						</BC.Div>
						<BC.Div>
							<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
							<SD.Span>
								Continue earning Reward Points at rate of 1 point for every Rs 125 on all other
								purchases.
							</SD.Span>
						</BC.Div>
						<BC.Div>
							<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
							<SD.Span>Redeem points instantly at select partners.</SD.Span>
						</BC.Div>
					</SD.secondSection>

					<SD.Tab>
						<BC.Div border="1px solid #dee7f2" height="50px">
							<nav className="nav nav-pills nav-fill">
								<a
									className="nav-item nav-link active"
									id="nav-home-tab"
									data-toggle="tab"
									href="#nav-home"
									role="tab"
									aria-controls="nav-home"
									aria-selected="true"
								>
									Bemefit and features
								</a>
								<a
									className="nav-item nav-link"
									id="nav-profile-tab"
									data-toggle="tab"
									href="#nav-profile"
									role="tab"
									aria-controls="nav-profile"
									aria-selected="false"
								>
									Fees and Charges
								</a>
								<a
									className="nav-item nav-link"
									id="nav-contact-tab"
									data-toggle="tab"
									href="#nav-contact"
									role="tab"
									aria-controls="nav-contact"
									aria-selected="false"
								>
									Redeemed Rewards
								</a>
								<a
									className="nav-item nav-link"
									id="nav-con-tab"
									data-toggle="tab"
									href="#nav-con"
									role="tab"
									aria-controls="nav-con"
									aria-selected="false"
								>
									Borrow Priviledges
								</a>
							</nav>
						</BC.Div>
						<div className="tab-content" id="nav-tabContent">
							<div
								className="tab-pane fade show active"
								id="nav-home"
								role="tabpanel"
								aria-labelledby="nav-home-tab"
							>
								<BC.Div marginTop="30px">
									<SD.wrapper>
										<SD.Header>Earn unlimited 10X reward points at select partners</SD.Header>
										<BC.Div marginTop="30px">
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Maecenas sit amet tellus at ligula condimentumgravida ei pharetra eulla
												eu justo mvariusam.
											</SD.Span>
										</BC.Div>
										<BC.Div>
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Aliquam erat volucongue lectus. Morbi p. Sed consequat metus tortor, vel
												rhoncus orci tempor vel.
											</SD.Span>
										</BC.Div>
										<BC.Div>
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Luctus quam quis mi sagittis venuis consequat facnunc amet fermentumum.
											</SD.Span>
										</BC.Div>

										{/* second text */}

										<SD.Header>Welcome rewards</SD.Header>
										<BC.Div marginTop="30px">
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Get 1,500 bonus points on your first spend made within 30 days of card
												issue.
											</SD.Span>
										</BC.Div>
										<BC.Div>
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Get 1,000 bonus points on your first spend of Rs. 1000 made within 60
												days of card issue.
											</SD.Span>
										</BC.Div>

										{/* third text */}

										<SD.Header>Earn bonus reward points</SD.Header>
										<BC.Div marginTop="30px">
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Bonus on monthly Spends: Get 300 bonus points on card spends of $1500 or
												more in a month.
											</SD.Span>
										</BC.Div>
										<BC.Div>
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Maecenas pharetra augue ut nibh blandit, eget pellentesque orci rhoncus.
											</SD.Span>
										</BC.Div>
									</SD.wrapper>
								</BC.Div>
							</div>
							<div
								className="tab-pane fade"
								id="nav-profile"
								role="tabpanel"
								aria-labelledby="nav-profile-tab"
							>
								<SD.flexibilyHeader>Flexibility Fee and Charges</SD.flexibilyHeader>
								<SD.FlexibilitytWrapper>
									<BC.Div display="flex" borderBotton="1px solid #dee7f2">
										<SD.flexibilyText flex="0.5" marginLeft="30px">
											flexibilyText
										</SD.flexibilyText>
										<SD.flexibilyText flex="1.5" marginLeft="30px">
											3.25% per month (40% per annum). This can change periodically based on your
											spend, payback and utilization patterns.
										</SD.flexibilyText>
									</BC.Div>

									<BC.Div display="flex">
										<SD.flexibilyText flex="0.5" marginLeft="30px">
											Annual Fee
										</SD.flexibilyText>
										<SD.flexibilyText flex="1.5" marginLeft="30px">
											Your annual fee of Rs1000 is waived on making spends of Rs30,000 in a
											membership year.
										</SD.flexibilyText>
									</BC.Div>
								</SD.FlexibilitytWrapper>
								<SD.flexibilyText marginLeft="50px">
									For further details, please CLICK HERE
								</SD.flexibilyText>
							</div>
							<div
								className="tab-pane fade"
								id="nav-contact"
								role="tabpanel"
								aria-labelledby="nav-contact-tab"
							>
								<BC.Div marginTop="30px">
									<SD.wrapper>
										<SD.Header>Fuel</SD.Header>
										<BC.Div marginTop="30px">
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Instant redemption at over 1200 participating oil outlets.
											</SD.Span>
										</BC.Div>
										<BC.Div>
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Redemption rate at oil outlets: 1 Reward Point = Rs 0.25 | Minimum
												Points required to redeem: 250
											</SD.Span>
										</BC.Div>

										{/* second text */}

										<SD.Header>In-Store Shopping</SD.Header>
										<BC.Div marginTop="30px">
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>Instant redemption at select partner stores.</SD.Span>
										</BC.Div>
										<BC.Div>
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Redemption rate at stores: 1 Reward Point = INR 0.30 | Minimum Points
												required to redeem: 250.
											</SD.Span>
										</BC.Div>

										{/* third text */}

										<SD.Header>Air miles</SD.Header>
										<BC.Div marginTop="30px">
											<SD.FontAwesome className="fa fa-angle-right"></SD.FontAwesome>{' '}
											<SD.Span>
												Redemption rate for air miles: 1 Reward Point = 0.75 miles | Minimum
												Points required to redeem: 100.
											</SD.Span>
										</BC.Div>
									</SD.wrapper>
								</BC.Div>
							</div>
							<div className="tab-pane fade" id="nav-con" role="tabpanel" aria-labelledby="nav-con-tab">
								<SD.flexibilyHeader>Personal Concierge Services</SD.flexibilyHeader>
								<SD.flexibilyPara marginLeft="60px">
									Call your concierge for help with planning a party, sending flowers, making dining
									reservations, for travel assistance.
								</SD.flexibilyPara>
								<SD.FlexibilitytWrapper>
									<BC.Div display="flex" borderBotton="1px solid #dee7f2">
										<SD.flexibilyText flex="0.5" marginLeft="30px">
											Dining Privileges
										</SD.flexibilyText>
										<SD.flexibilyText flex="1.5" marginLeft="30px">
											Up to 15% savings across participating restaurants.
										</SD.flexibilyText>
									</BC.Div>

									<BC.Div display="flex">
										<SD.flexibilyText flex="0.5" marginLeft="30px">
											Shopping Privileges
										</SD.flexibilyText>
										<SD.flexibilyText flex="1.5" marginLeft="30px">
											Enjoy savings and offers several stores in your City.
										</SD.flexibilyText>
									</BC.Div>

									<BC.Div display="flex">
										<SD.flexibilyText flex="0.5" marginLeft="30px">
											EMI Privileges
										</SD.flexibilyText>
										<SD.flexibilyText flex="1.5" marginLeft="30px">
											Choose easy EMI options at more than 2,000 consumer electronics and mobile
											phone outlets, leading retail chains and e-retailers.
										</SD.flexibilyText>
									</BC.Div>
								</SD.FlexibilitytWrapper>
							</div>
						</div>
					</SD.Tab>
				</DV.Div>

				<Footer />
			</SD.StyleWrapper>
		</SD.CardContainer>
	);
};
