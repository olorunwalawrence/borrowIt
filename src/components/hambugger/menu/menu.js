import React from 'react';
import { StyledMenu, Avater, Container, AvaterName } from './menu.styled';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<Container>
				<Avater></Avater>
				<AvaterName>olorunwa lawrence</AvaterName>
			</Container>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/profile">profile</Link>
			<Link to="/account">Account</Link>
		</StyledMenu>
	);
};
export default Menu;
