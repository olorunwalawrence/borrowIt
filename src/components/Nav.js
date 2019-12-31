import React, { Fragment, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import * as NC from '../Styles/Nav';
// import { Search } from '../components/search';
import { Link } from 'react-router-dom';

import { TopNav } from '../components/TopNav';

export const Navigation = () => {
	// const [search, setSearch] = useState(true);

	// const HandleToggle = () => {
	// 	setSearch(!search);
	// };

	return (
		<Fragment>
			{/* <NC.Show show={search}>
				<Search />
			</NC.Show> */}
			<TopNav />

			<NC.NavContainer>
				<NC.LogoCOntainer>
					<NC.Img src={require('../assests/images/logo.png')}></NC.Img>
				</NC.LogoCOntainer>

				<NC.Container>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link>
									<Link to="/"> Home</Link>
								</Nav.Link>

								<NavDropdown title="Loan Product" id="collasible-nav-dropdown">
									<NavDropdown.Item>
										<Link to="/credit-card"> Credit card</Link>
									</NavDropdown.Item>

									<NavDropdown.Item>
										{' '}
										<Link to="/loan">Loan</Link>
									</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown title="About us" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown title="Features" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown title="Bank Account" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							{/* <Nav>
								<NC.Span>
									<i class="fa fa-search" onClick={HandleToggle}></i>
								</NC.Span>
							</Nav> */}
						</Navbar.Collapse>
					</Navbar>
				</NC.Container>
			</NC.NavContainer>
		</Fragment>
	);
};
