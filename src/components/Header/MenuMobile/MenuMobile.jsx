import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from "redux/selectors";
import Logo from '../HeaderLogo';
import Navigations  from '../HeaderNavigations';
import {UserNav} from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import { ReactComponent as Burger } from '../../../data/icons/burger.svg';
import { ReactComponent as CloseBurger } from '../../../data/icons/closeBurger.svg';
import { Wrapper, WrapperTop, WrapperBtn, WrapperNav, Btn } from './MenuMobileStyled';

const MenuMobile = () => {
  	const authSelector = useSelector(getAuth);
	const isLoggedIn = authSelector.isLoggedIn;
  
	const [menuActive, setMenuActive] = useState(false);

	const toggleBurger = () => {
		setMenuActive(menuActive => !menuActive);
	};
	
	const toggleBodyHidden = menuActive => {
		if (menuActive) {
			console.log(" toggleBodyHiddenisOpen", menuActive)
			document.body.style.overflow = 'hidden';
		}
		else {
			console.log(" else {", menuActive)
			document.body.style.overflow = 'auto';
		}
	};
	
	useEffect(() => {
		toggleBodyHidden(menuActive);
		console.log("useEffect")
	}, [menuActive]);

	return (
		<Wrapper className={menuActive ? 'active' : ''} >
			<WrapperTop>
				<Logo />

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
			</WrapperTop>

				<WrapperNav
					className={menuActive ? 'active' : ''} >
					{isLoggedIn ? (
						<UserNav />
					) : (
						<AuthNav />
					)}
					<Navigations />
				</WrapperNav>

		</Wrapper>
	);
};

export default MenuMobile;