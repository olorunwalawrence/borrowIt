import React from 'react';
import * as FT from '../Styles/footer';
import * as FRM from '../Styles/form';

export const Footer = () => {
	return (
		<>
			<FT.Footer>
				<FT.FooterTopContainer>
					<FT.IMG src={require('../assests/images/logo.png')}></FT.IMG>
					<FT.Newsletter>Signup Our Newsletter</FT.Newsletter>
					<FRM.Form>
						<FRM.Input placeholder="write an email" padding="9px" width="200px" />
						<FRM.Button
							width="100px"
							align="center"
							padding="10px"
							fontWeight="500"
							background="#f51f8a"
							color="white"
							border="none"
						>
							Go!
						</FRM.Button>
					</FRM.Form>
				</FT.FooterTopContainer>

				<FT.divider></FT.divider>

				<FT.secondSection>
					<FT.SecondSection1>
						<FT.SectionText>
							Our goal at Borrow Loan Company is to provide access to personal loans and education loan,
							car loan, home loan at insight competitive interest rates lorem ipsums. We are the loan
							provider, you can use our loan product.
						</FT.SectionText>

						<FT.sectiontextWrapper>
							<FT.AddressText>
								<FT.Span className="fa fa-map-marker"></FT.Span>
								25b ameen street
							</FT.AddressText>
							<FT.Call>
								<FT.Span className="fa fa-phone"></FT.Span> +2347015009775
							</FT.Call>
						</FT.sectiontextWrapper>
					</FT.SecondSection1>

					<FT.SecondSection2>
						<FT.NavWrapper>
							<FT.SectionNav1>
								{' '}
								<FT.List>Home</FT.List>
								<FT.List>Services</FT.List>
								<FT.List>About Us</FT.List>
								<FT.List>News </FT.List>
								<FT.List>Faq</FT.List>
								<FT.List>Contact us</FT.List>
							</FT.SectionNav1>

							<FT.SectionNav1>
								<FT.List>Car Load</FT.List>
								<FT.List>Home Loan</FT.List>
								<FT.List>Educaional Loan</FT.List>
								<FT.List>Business Loan </FT.List>
								<FT.List>Personal Loan</FT.List>
								<FT.List>Dept Consolidation</FT.List>
							</FT.SectionNav1>
							<FT.sectonNav3>
								<FT.List>FaceBook</FT.List>
								<FT.List>Google</FT.List>
								<FT.List>Twitter</FT.List>

								<FT.List>Linked In</FT.List>
							</FT.sectonNav3>
						</FT.NavWrapper>
					</FT.SecondSection2>
				</FT.secondSection>
			</FT.Footer>

			<FT.Littlefooter>
				<FT.Para align="left">copy right 2019| Loan company Business</FT.Para>
				<FT.Para align="right">Terms of use | private policy</FT.Para>
			</FT.Littlefooter>
		</>
	);
};
