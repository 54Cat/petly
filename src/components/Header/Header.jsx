import { HeaderContainer, WrapperDesktop, NavDesktop } from './HeaderStyled';
import Logo from './HeaderLogo';
import Navigations from './HeaderNavigations';
import AuthNav from './AuthNav/AuthNav';
// import MenuBurger from './MenuMobile/MenuBurger';

const Header = () => {
  return (
    <HeaderContainer>
      
      <NavDesktop>
        <WrapperDesktop>
          <Logo />
          <Navigations />
        </WrapperDesktop>
        <AuthNav />
      </NavDesktop>
      
      {/* <MenuBurger /> */}
  </ HeaderContainer>
  );
};

export default Header;