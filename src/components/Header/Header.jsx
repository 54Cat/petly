import { HeaderNav } from './HeaderStyled';
import Logo from './HeaderLogo';
import Navigations from './HeaderNavigations';
import HeaderAuthNav from './HeaderAuthNav';
import MenuBurger from './MenuMobile/MenuBurger';

const Header = () => {
  return (
    <HeaderNav>
      <Logo />
      <Navigations />
      <HeaderAuthNav />
      <MenuBurger />
  </ HeaderNav>
  );
};

export default Header;