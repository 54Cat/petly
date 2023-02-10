import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "redux/Auth/AuthSelectors";
import Logo from '../HeaderLogo';
import Navigations  from '../HeaderNavigations';
import {UserNav} from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import { Wrapper,  WrapperNav } from '../MenuStyled';

const MenuDesktop = () => {
	const userSelector = useSelector(selectUser);
	const token = userSelector.token;
	console.log("token", token)
   
	return (
		<Wrapper>

			<WrapperNav>
				<Logo />
				<Navigations/>
			</WrapperNav>

			{token ? (
				<UserNav />
			) : (
				<AuthNav />
			)}
					
		</Wrapper>
	);
};

export default MenuDesktop;