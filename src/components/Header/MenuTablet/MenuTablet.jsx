import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from "redux/selectors";
import Logo from '../HeaderLogo';
import Navigations  from '../HeaderNavigations';
import {UserNav} from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import { ReactComponent as Burger } from '../../../data/icons/burger.svg';
import { ReactComponent as CloseBurger } from '../../../data/icons/closeBurger.svg';
import { Wrapper, WrapperTop, WrapperBtn, WrapperNav, Btn } from './MenuTabletStyled';

const MenuTablet = () => {
  const authSelector = useSelector(getAuth);
	const isLoggedIn = authSelector.isLoggedIn;
	console.log("isLoggedIn", isLoggedIn)
  
	const [isOpen, setIsOpen] = useState(false);
	// console.log("isOpen", isOpen)

	const toggleBurger = () => {
		setIsOpen(isOpen => !isOpen);
	};
	
	const toggleBodyHidden = isOpen => {
		if (isOpen) {
			console.log(" toggleBodyHiddenisOpen", isOpen)
			document.body.style.overflow = 'hidden';
		}
		else {
			console.log(" else {", isOpen)
			document.body.style.overflow = 'auto';
		}
	};
	
	useEffect(() => {
		toggleBodyHidden(isOpen);
		console.log("useEffect")
	}, [isOpen]);

	return (
		<Wrapper>
			<WrapperTop>
				<Logo />

				<WrapperBtn>
					{isOpen ? (
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

			<WrapperNav >
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

export default MenuTablet;