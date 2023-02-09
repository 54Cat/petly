import { HeaderContainer, NavDesktop } from './HeaderStyled';
import Logo from './HeaderLogo';
import Navigations from './HeaderNavigations';
import AuthNav from '../AuthNav/AuthNav';
// import MenuBurger from './MenuMobile/MenuBurger';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavDesktop>
        <Navigations />
        <AuthNav />
      </NavDesktop>
      
      {/* <MenuBurger /> */}
  </ HeaderContainer>
  );
};

export default Header;