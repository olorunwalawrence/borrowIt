import React from 'react';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import { BorrowCard } from '../components/borrowCard';
import * as BC from '../Styles/borrowcard';
import * as AC from '../Styles/dashBoard';
import * as CD from '../Styles/creditCardListing';
import { Transaction } from '../data/data';

import { HarmBurger } from '../components/hambugger/hamBurger';

export const Dashboard = () => {
	const columns = [
		{
			dataField: 'id',
			text: 'Transacction ID',
		},
		{
			dataField: 'cardnumber',
			text: 'Card Number',
		},
		{
			dataField: 'date',
			text: 'Date',
		},
		{
			dataField: 'balance',
			text: 'Balance',
		},
		{
			dataField: 'cardType',
			text: 'Card Type',
		},
		{
			dataField: 'status',
			text: 'Status',
		},
		{
			dataField: 'paymentStatus',
			text: 'Payment Status',
		},
		{
			dataField: 'time',
			text: 'transaction time',
		},
		{
			dataField: 'payback',
			text: 'action button',
		},
	];

	return (
		<AC.AccountContainer>
			<AC.Cover>
				<AC.Div>
					<HarmBurger />
				</AC.Div>
				<AC.Wrapper
					display="flex"
					justifyContent="space-around"
					mediaflexdirection="column"
					mediaAlignItems="center"
				>
					<AC.Card>
						<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
							<BC.BorrowWrapper background="#20c997" color="#fff">
								<BorrowCard cardtype={'Money Back'} />
							</BC.BorrowWrapper>
						</CD.Div>
					</AC.Card>
					<AC.Card>
						<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
							<BC.BorrowWrapper background="#20c997" color="#fff">
								<BorrowCard cardtype={'Money Back'} />
							</BC.BorrowWrapper>
						</CD.Div>
					</AC.Card>
					<AC.Card>
						<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
							<BC.BorrowWrapper background="#20c997" color="#fff">
								<BorrowCard cardtype={'Money Back'} />
							</BC.BorrowWrapper>
						</CD.Div>
					</AC.Card>
				</AC.Wrapper>
				<AC.Wrapper paddingTop="5%">
					<AC.Header>Transactions Details</AC.Header>
				</AC.Wrapper>
				<AC.Wrapper padding="1.5%">
					<BootstrapTable keyField="id" data={Transaction} columns={columns} />
				</AC.Wrapper>
			</AC.Cover>
		</AC.AccountContainer>
	);
};
