import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from "redux/selectors";
import Logo from '../HeaderLogo';
import Navigations  from '../HeaderNavigations';
import {UserNav} from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import { Wrapper,  WrapperNav } from '../MenuStyled';

const MenuDesktop = () => {
  	const authSelector = useSelector(getAuth);
	const isLoggedIn = authSelector.isLoggedIn;
   
	return (
		<Wrapper>

			<WrapperNav>
				<Logo />
				<Navigations/>
			</WrapperNav>

			{isLoggedIn ? (
				<UserNav />
			) : (
				<AuthNav />
			)}
					
		</Wrapper>
	);
};

export default MenuDesktop;