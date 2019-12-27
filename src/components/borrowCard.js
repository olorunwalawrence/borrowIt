import React from 'react';
import * as BC from '../Styles/borrowcard';

export const BorrowCard = () => {
	return (
		<BC.BorrowContainer>
			<BC.BorrowWrapper background="gold" color="#fff">
				<BC.Top display="flex">
					<BC.Div>
						<BC.Para margin="10px">
							<BC.Span>Borrow</BC.Span>
							<br /> Credit card
						</BC.Para>
					</BC.Div>
					<BC.Para margin="10px">
						<BC.Span>money Back</BC.Span>
					</BC.Para>
				</BC.Top>

				<BC.Chip>
					<BC.Img src={require('../assests/images/chip.PNG')} />
				</BC.Chip>
				<BC.Div display="flex" marginLeft="41px" width="70%" justifyContent="space-between">
					<BC.Dash></BC.Dash>
					<BC.Dash></BC.Dash>
					<BC.Dash></BC.Dash>
					<BC.Dash></BC.Dash>
				</BC.Div>

				<BC.Div display="flex">
					<BC.Div display="flex" flex="1" marginLeft="20px" marginTop="10px">
						<BC.Para>valid from</BC.Para>
						<BC.Date marginRight="10px" marginTop="10px">
							01/20
						</BC.Date>
						<BC.Para>valid thru</BC.Para>
						<BC.Date marginTop="10px">16/23</BC.Date>
					</BC.Div>
					<BC.Div display="flex" flex="1" justifyContent="flex-end" marginRight="40px" marginTop="20px">
						<BC.FirstCircle marginLeft="20px"></BC.FirstCircle>
						<BC.SecondCircle></BC.SecondCircle>
					</BC.Div>
				</BC.Div>

				<BC.cardFooter>Customer Name</BC.cardFooter>
			</BC.BorrowWrapper>
		</BC.BorrowContainer>
	);
};
