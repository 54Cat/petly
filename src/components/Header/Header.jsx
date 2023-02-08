import { HeaderContainer } from './HeaderStyled';
import Logo from './HeaderLogo';
import Navigations from './HeaderNavigations';
import HeaderAuthNav from './HeaderAuthNav';
import MenuBurger from './MenuMobile/MenuBurger';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigations />
      <HeaderAuthNav />
      <MenuBurger />
  </ HeaderContainer>
  );
};

export default Header;