import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from "redux/selectors";
import Logo from '../HeaderLogo';
import Navigations  from '../HeaderNavigations';
import {UserNav} from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import { ReactComponent as Burger } from '../../../data/icons/burger.svg';
import { ReactComponent as CloseBurger } from '../../../data/icons/closeBurger.svg';
import { Wrapper, Container, WrapperTop, WrapperBtn, WrapperNav, Btn } from '../MenuStyled';

const MenuTablet = () => {
  	const authSelector = useSelector(getAuth);
	const isLoggedIn = authSelector.isLoggedIn;
  
	const [menuActive, setMenuActive] = useState(false);

	const toggleBurger = () => {
		setMenuActive(menuActive => !menuActive);
	};
	
	const toggleBodyHidden = menuActive => {
		if (menuActive) {
			document.body.style.overflow = 'hidden';
		}
		else {
			document.body.style.overflow = 'auto';
		}
	};
	
	useEffect(() => {
		toggleBodyHidden(menuActive);
	}, [menuActive]);

	return (
		<Wrapper className={menuActive ? 'active' : ''} >
			<WrapperTop>
				<Logo />

				<Container >
					<WrapperNav
					className={menuActive ? 'active' : ''} >
					{isLoggedIn ? (
						<UserNav />
					) : (
						<AuthNav />
					)}
					</WrapperNav>
					
					<WrapperBtn>
						{menuActive ? (
							<>
								<Btn
									type="button"
									onClick={toggleBurger}
								>
									<CloseBurger
										width="40px"
										heigth="40px"
										aria-label="Menu"
									></CloseBurger>
								</Btn>
							</>
						) : (
							<>
								<Btn
									type="button"
									onClick={toggleBurger}
								>
									<Burger
										width="40px"
										heigth="40px"
										aria-label="Menu"
									></Burger>
								</Btn>
							</>
						)}
					</WrapperBtn>
				</Container>

			</WrapperTop>
			
			<Navigations active={menuActive} setActive={setMenuActive} />

		</Wrapper>
	);
};

export default MenuTablet;