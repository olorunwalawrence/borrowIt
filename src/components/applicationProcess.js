import React, { Fragment } from 'react';
import * as AP from '../Styles/applicationprocess';
import * as Card from '../Styles/card';
import { data } from '../data/data';

export const Applicationprocess = () => {
	const Data = data.map(data => {
		return data;
	});
	const ApplicationInfo = [
		{
			title: 'Choose Loan Amount',
			number: 1,
			text: 'Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis etfelis.',
		},
		{
			title: 'Approved Your Loan',
			number: 2,
			text: 'Fusce tempor sstibulum varius sem nec mi luctus viverra edcongue lobortis faucibus.',
		},
		{
			title: 'Get Your Cash',
			number: 3,
			text: 'Get your money in minutes simtibulm varius semnec mluctus gue lobortis faucibus.',
		},
	];
	return (
		<Fragment>
			<AP.ApplicationContainer height="auto" margin="1px auto" width="100%">
				<AP.ApplicationWrapper>
					<AP.ApplicationHeader>Fast and easy Application Process</AP.ApplicationHeader>
					<AP.Para marginTop="20px" textALign="center">
						Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed
						congue lobortis faucibus.
					</AP.Para>
				</AP.ApplicationWrapper>
				<AP.wrapper display="flex" margin="1px auto" width="93%">
					{ApplicationInfo.map(res => (
						<Card.Card
							width="40%"
							BoxShadow="2px 2px #e3f0fe"
							marginLeft="20px"
							border="1px solid #e3f0fe"
							height="auto"
						>
							<AP.Circle>{res.number}</AP.Circle>
							<AP.Header marginTop="40px" textAlign="center">
								{res.title}
							</AP.Header>
							<AP.Para>{res.text}</AP.Para>
						</Card.Card>
					))}
				</AP.wrapper>

				<AP.Button>View Our Loans</AP.Button>
			</AP.ApplicationContainer>

			<AP.ApplicationContainer background="#f5f7f9">
				<AP.wrapper height="auto" width="93%">
					<AP.Header paddingTop="100px" textALign="center" color="#3c4d6b">
						{' '}
						Why People Choose Us
					</AP.Header>
					<AP.Para textALign="center" marginTop="30px" color="#3c6d6b">
						Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed
						congue lobortis faucibus.
					</AP.Para>
					<Card.CardContainer display="flex" margin="4px auto" width="93%">
						{data.map(data => (
							<Card.Card
								width="440px"
								background="#fff"
								border="1px solid #dee4ee"
								marginBottom="100px"
								BoxShadow="0.3rem 0.2rem #dee4ee "
							>
								<Card.img className={data.img} aria-hidden="true" />
								<AP.Header textALign="center" color="#3c4d6b;" margin="0px 0px 40px 0px">
									{data.header}
								</AP.Header>
								<AP.Para textALign="center" padding="40px" color="#3c4d6b">
									{data.text}
								</AP.Para>
								<AP.LinkWrapper>
									<AP.Link>{data.link}</AP.Link>
								</AP.LinkWrapper>
							</Card.Card>
						))}
					</Card.CardContainer>
				</AP.wrapper>
			</AP.ApplicationContainer>

			<AP.ApplicationContainer background="#15549a" style={{ marginBottom: '100px' }}>
				<AP.wrapper height="82.5vh" width="93%" marginBottom="100px">
					<AP.Header paddingTop="50px" textALign="center" margin="0px" color="#ffffff" size="30px">
						{' '}
						Some of our Awesome Testimonials
					</AP.Header>
					<AP.Para textALign="center" marginTop="30px" color="#87c0ff">
						You won’t be the only one lorem ipsu mauris diam mattises.
					</AP.Para>

					<Card.CardContainer display="flex" margin="4px auto" width="93%" justifyContent="space-between">
						{data.map(data => (
							<>
								<Fragment>
									<Card.Card
										width="380px"
										background="#fff"
										height="220px"
										fontFamily="Merriweather,serif;"
									>
										<AP.Para
											textALign="center"
											padding="40px"
											color="#414855"
											Style="italic"
											lineHignt="35px"
										>
											{data.text}
										</AP.Para>
										<AP.imageWrapper>
											<AP.img src={data.picture} />

											<div>
												<AP.Para fontWeight="1000">{data.name}</AP.Para>
												<AP.Para color="#87c0ff" fontWeight="500">
													{data.loanType}
												</AP.Para>
											</div>
										</AP.imageWrapper>
									</Card.Card>
								</Fragment>
							</>
						))}
					</Card.CardContainer>
				</AP.wrapper>
			</AP.ApplicationContainer>
		</Fragment>
	);
};
