import React from 'react';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import Logo from '../Navbar/Logo.svg';
import './Navbar.css'

const Navbar = () => {
return (
	<>
	<Nav className="container-fluid">
		<NavMenu>
        <NavLink to="/">
        <img className='game-logo' style={{width: '100px', float:'left'}} src={Logo} alt='Logo' />
        </NavLink> 
        {/* <NavLink to='/' activeStyle>
			Home
		</NavLink> */}
		<NavLink className='help-link' style={{float: 'right', paddingLeft: '650px'}}  to='/help' activeStyle>
			Help
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
