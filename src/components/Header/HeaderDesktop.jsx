import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from "../../redux/selectors"

import Logo from './Logo/HeaderLogo';
import Navigations  from './Nav/HeaderNavigations';
import {UserNav} from './UserNav/UserNav';
import AuthNav from './AuthNav/AuthNav';
import { Wrapper,  WrapperNav } from './HeaderStyled';

const HeaderDesktop = () => {
	const { isLoggedIn } = useSelector(getAuth);

	const [menuActive, setMenuActive] = useState(false);
   
	return (
		<Wrapper>

			<WrapperNav>
				<Logo />
				<Navigations active={menuActive} setActive={setMenuActive} />
			</WrapperNav>

			{isLoggedIn
			? (
				<UserNav  active={menuActive} setActive={setMenuActive} />
			) : (
				<AuthNav  active={menuActive} setActive={setMenuActive} />
			)}
					
		</Wrapper>
	);
};

export default HeaderDesktop;