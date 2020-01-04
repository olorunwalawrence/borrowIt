export const data = [
	{
		name: 'olorunwa lawrence',
		img: 'fa fa-home',
		loanType: 'personal loan',
		header: 'Dedicated Specialist',
		link: 'Meet the team',
		picture: require('../assests/images/Capture.PNG'),
		text:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
	},
	{
		name: 'daniel adekunle',
		loanType: 'house loan',
		img: 'fa fa-home',
		header: 'success Story Rating',
		link: 'view client review',
		picture: require('../assests/images/Capture.PNG'),
		text:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ',
	},
	{
		name: 'boluwatife adekunle',
		loanType: 'car loan',
		img: 'fa fa-home',
		header: 'No front apraisal fee',
		link: 'why choose us',
		picture: require('../assests/images/Capture.PNG'),
		text:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ',
	},
];

export const profile = [
	{
		firstname: 'olorunwa',
		lastname: 'lawrence',
		maidenname: 'flora',
		Bvn: '123456765432',
		email: 'olorunwalawrence5@gmail.com',
		password: 'loverso',
		city: 'yaba',
		state: 'lagos',
		img: require('../assests/images/Capture.PNG'),
		country: 'Nigeria',
		loantype: {
			cash: 'cash',
			creditcard: 'credit card',
		},
		amount: '90,000',
		year: '20/09/2020',
		officeaddress: '25b ameen street',
		address: '26b ameen street yaba lagos',
	},
];

export const Account = [
	{
		accountname: 'olorunwa lawrence',
		accounttype: 'credit card',
		cardnumber: 12345678456,
		registrationdate: Date.now(),
		bvn: 23456789654,
		loantype: 'credit card',
		balance: '150,0000',
		tansactions: {
			cardnumber: 12345678456,
			date: Date.now,
			amountspent: '#30000',
			balance: '150,000',
		},
	},
];

export const Transaction = [
	{
		id: 1,
		cardnumber: 12345678456,
		date: Date(),
		amount: '#30000',
		balance: '150,000',
		cardType: 'premium',
		status: 'loan',
		paymentStatus: 'not payed',
		cardStatus: 'loan',

		payback: 'pay back',
	},
	{
		id: 2,
		cardnumber: 12345678456,
		date: Date(),
		amount: '#30000',
		balance: '150,000',
		cardType: 'premium',
		status: 'loan',
		paymentStatus: 'not payed',
		time: new Date().getTime(),

		payback: 'pay back',
	},
	{
		id: 3,
		cardnumber: 12345678456,
		date: Date.now(),
		amount: '#30000',
		balance: '150,000',
		cardType: 'premium',
		status: 'loan',
		paymentStatus: 'not payed',
		cardStatus: 'loan',

		payback: 'pay back',
	},
];
