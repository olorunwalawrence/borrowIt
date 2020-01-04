import React, { Fragment } from 'react';
import * as AP from '../Styles/applicationprocess';
import * as Card from '../Styles/card';
import { data } from '../data/data';

export const Applicationprocess = () => {
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
			<AP.ApplicationContainer height="auto" margin="1px auto" width="100%" background="azure" paddingTop="20px">
				<AP.ApplicationWrapper>
					<AP.ApplicationHeader>Fast and easy Application Process</AP.ApplicationHeader>
					<AP.Para marginTop="10px" textALign="center">
						Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed
						congue lobortis faucibus.
					</AP.Para>
				</AP.ApplicationWrapper>
				<AP.wrapper display="flex" margin="1px auto" width="80%">
					{ApplicationInfo.map(res => (
						<Card.Card
							width="40%"
							BoxShadow="1px 0px 10px 5px #e3f0fe"
							marginLeft="20px"
							border="1px solid #e3f0fe"
							height="auto"
							background="white"
							textAlign="center"
							padding="10px"
						>
							<AP.Circle>{res.number}</AP.Circle>
							<AP.Header marginTop="10px" textAlign="center">
								{res.title}
							</AP.Header>
							<AP.Para>{res.text}</AP.Para>
						</Card.Card>
					))}
				</AP.wrapper>

				<AP.Button>View Our Loans</AP.Button>
			</AP.ApplicationContainer>

			<AP.ApplicationContainer background="#f5f7f9">
				<AP.wrapper height="auto" width="86%" margin="60px auto">
					<AP.Header paddingTop="10px" textALign="center" color="#3c4d6b">
						{' '}
						Why People Choose Us
					</AP.Header>
					<AP.Para textALign="center" marginTop="30px" color="#3c6d6b">
						Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed
						congue lobortis faucibus.
					</AP.Para>
					<Card.CardContainer
						boxshadow="1px 0px 10px 5px #dee4ee"
						display="flex"
						margin="2px auto"
						width="93%"
					>
						{data.map(data => (
							<Card.Card width="440px" background="#fff" border="1px solid #dee4ee">
								<Card.img className={data.img} aria-hidden="true" />
								<AP.Header textALign="center" color="#3c4d6b;" margin="0px 0px 20px 0px">
									{data.header}
								</AP.Header>
								<AP.Para textALign="center" padding="20px" color="#3c4d6b">
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
				<AP.wrapper height="auto" width="86%" marginBottom="40px" margin="1px auto">
					<AP.Header paddingTop="30px" textALign="center" margin="0px" color="#ffffff" size="30px">
						{' '}
						Some of our Awesome Testimonials
					</AP.Header>
					<AP.Para textALign="center" marginTop="10px" color="#87c0ff">
						You won’t be the only one lorem ipsu mauris diam mattises.
					</AP.Para>

					<Card.CardContainer display="flex" margin="0px auto" width="94%" justifyContent="space-between">
						{data.map(data => (
							<>
								<Fragment>
									<Card.Card
										width="340px"
										background="#fff"
										height="auto"
										fontFamily="Merriweather,serif;"
										marginBottom="40px"
									>
										<AP.Para
											textALign="center"
											padding="20px"
											color="#414855"
											Style="italic"
											lineHignt="35px"
										>
											{data.text}
										</AP.Para>
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
