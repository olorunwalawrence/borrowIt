import React from 'react';
import * as BC from '../Styles/borrowcard';

export const BorrowCard = props => {
	return (
		<BC.BorrowContainer>
			<BC.BorrowWrapper color="#fff">
				<BC.Top display="flex">
					<BC.Div>
						<BC.Para>
							<BC.Span>Borrow</BC.Span>
							<br /> Credit card
						</BC.Para>
					</BC.Div>
					<BC.Para>
						<BC.Span>{props.cardtype}</BC.Span>
					</BC.Para>
				</BC.Top>

				<BC.Chip>
					<BC.ChipContainer>
						<BC.Img src={require('../assests/images/chip.PNG')} />
					</BC.ChipContainer>
				</BC.Chip>

				<BC.Div
					display="flex"
					marginLeft="41px"
					width="70%"
					justifyContent="space-between"
					mediaJustify="space-between"
				>
					<BC.Dash></BC.Dash>
					<BC.Dash></BC.Dash>
					<BC.Dash></BC.Dash>
					<BC.Dash></BC.Dash>
				</BC.Div>

				<BC.Div
					display="flex"
					justifyContent="space-between"
					paddingTop="0.8rem"
					width="100%"
					mediaJustify="space-between"
				>
					<BC.Div display="flex" flex="1.5" mediaflex="2" mediaJustify="space-between">
						<BC.Para>valid from</BC.Para>
						<BC.Date>01/20</BC.Date>
						<BC.Para>valid thru</BC.Para>
						<BC.Date>16/23</BC.Date>
					</BC.Div>

					<BC.Div display="flex" flex="1" mediaflex="1" mediaJustify="space-between">
						<BC.FirstCircle></BC.FirstCircle>
						<BC.SecondCircle></BC.SecondCircle>
					</BC.Div>
				</BC.Div>

				<BC.cardFooter>Customer Name</BC.cardFooter>
			</BC.BorrowWrapper>
		</BC.BorrowContainer>
	);
};
