import HeaderLogo from './HeaderLogo';
import Navigations from './HeaderNavigations';
import HeaderAuthNav from './HeaderAuthNav';
import MenuBurger from './MenuMobile/MenuBurger';

const Header = () => {
  return (
    <>
        <Header>
            <HeaderLogo />
            <Navigations />
            <HeaderAuthNav />
            <MenuBurger />
        </ Header>
    </>
  );
};

export default Header;