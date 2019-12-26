import React from 'react';
import Whirligig from 'react-whirligig';
import * as CA from '../Styles/carousel';

export const Slider = () => {
	const CardInfo = [
		{
			img: 'fa fa-home',
			header: 'HOME LOAN',
			readMore: 'Read more',
			text:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like",
		},
		{
			img: 'fa fa-home',
			header: 'EDUCATIONAL LOAD',
			readMore: 'Read more',
			text:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like",
		},
		{
			img: 'fa fa-home',
			header: 'BUSINESS LOAN',
			readMore: 'Read more',
			text:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like",
		},
		{
			img: 'fa fa-home',
			header: 'PERSONAL LOAN',
			readMore: 'Read more',
			text:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like",
		},
		{
			img: 'fa fa-home',
			header: 'CAR LOAN',
			readMore: 'Read more',
			text:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like",
		},
	];
	let whirligig;
	const next = () => whirligig.next();
	const prev = () => whirligig.prev();

	return (
		<CA.constainer>
			<CA.Row>
				<CA.Header>Find Loan Products We Offers</CA.Header>
				<CA.Para>
					We will match you with a loan program that meet your financial need. In short term liquidity, by
					striving to make funds available to them within 24 hours of application.
				</CA.Para>
			</CA.Row>
			<CA.wrapper>
				<div>
					<CA.btnWrapper>
						<CA.Span onClick={prev}>&#8592;</CA.Span>
						<CA.Inbtw>
							<CA.Line></CA.Line> LOAN <CA.Line></CA.Line>
						</CA.Inbtw>
						<CA.Span onClick={next}>&#8594;</CA.Span>
					</CA.btnWrapper>
					<Whirligig
						visibleSlides={3}
						gutter="1px"
						ref={_whirligigInstance => {
							whirligig = _whirligigInstance;
						}}
					>
						{CardInfo.map(info => (
							<CA.Card>
								<CA.Image className={info.img}></CA.Image>
								<CA.CarouselHeader>{info.header}</CA.CarouselHeader>
								<CA.cardInfo>{info.text}</CA.cardInfo>
								<CA.readmoreWrapper>
									<CA.ReadMore>{info.readMore}</CA.ReadMore>
								</CA.readmoreWrapper>
							</CA.Card>
						))}
					</Whirligig>
				</div>
			</CA.wrapper>
		</CA.constainer>
	);
};
