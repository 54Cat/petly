import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from "redux/selectors";
import Logo from '../HeaderLogo';
import Navigations  from '../HeaderNavigations';
import {UserNav} from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import { Wrapper,  WrapperNav } from './MenuDesktopStyled';

const MenuDesktop = () => {
  	const authSelector = useSelector(getAuth);
	const isLoggedIn = authSelector.isLoggedIn;
  

      
      
    //   <NavDesktop>
    //     <WrapperDesktop>
    //       <Logo />
    //       <Navigations />
    //     </WrapperDesktop>
    //     <AuthNav />
    //   </NavDesktop> 

	return (
		<Wrapper>

			<WrapperNav>
				<Logo />
				<Navigations/>
			</WrapperNav>

			{/* <WrapperNav> */}
			{isLoggedIn ? (
				<UserNav />
			) : (
				<AuthNav />
			)}
			{/* </WrapperNav> */}
					
		</Wrapper>
	);
};

export default MenuDesktop;