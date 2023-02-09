import { HeaderContainer, NavDesktop } from './HeaderStyled';
import Logo from './HeaderLogo';
import Navigations from './HeaderNavigations';
import AuthNav from '../AuthNav/AuthNav';
import MenuBurgerIcon from './MenuMobile/MenuBurgerStyled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavDesktop>
        <Navigations />
        <AuthNav />
      </NavDesktop>
      
      <MenuBurgerIcon />
  </ HeaderContainer>
  );
};

export default Header;