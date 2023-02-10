import React from 'react';
import { useState } from 'react';
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
	const [menuActive, setMenuActive] = useState(false);
   
	return (
		<Wrapper>

			<WrapperNav>
				<Logo />
				<Navigations active={menuActive} setActive={setMenuActive} />
			</WrapperNav>

			{token ? (
				<UserNav  active={menuActive} setActive={setMenuActive} />
			) : (
				<AuthNav  active={menuActive} setActive={setMenuActive} />
			)}
					
		</Wrapper>
	);
};

export default MenuDesktop;