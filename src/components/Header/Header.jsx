import { HeaderContainer } from './HeaderStyled';
// import Navigations from './HeaderNavigations';
// import AuthNav from './AuthNav/AuthNav';
import MenuMobile from './MenuMobile/MenuMobile';
// import MenuTablet from './MenuMobile/MenuTablet';
// import MenuDesktop from './MenuMobile/MenuDesktop';

const Header = () => {
  return (
    <HeaderContainer>

      <MenuMobile/>
      {/* <MenuTablet/> */}
      {/* <MenuDesktop/> */}
      
      {/* <NavDesktop>
        <WrapperDesktop>
          <Logo />
          <Navigations />
        </WrapperDesktop>
        <AuthNav />
      </NavDesktop> */}

  </ HeaderContainer>
  );
};

export default Header;