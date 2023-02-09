import { useMediaQuery } from 'react-responsive';
import Logo from './HeaderLogo';

import { HeaderContainer } from './HeaderStyled';
import MenuMobile from './MenuMobile/MenuMobile';
import MenuTablet from './MenuTablet/MenuTablet';
// import MenuDesktop from './MenuMobile/MenuDesktop';

const Header = () => {
  
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  console.log("isTablet", isTablet)
  console.log("isDesktop", isDesktop)
  return (
    <HeaderContainer>

      {isDesktop ? (
				<Logo />
			) : isTablet ? (
				<MenuTablet />
			) : (
				<MenuMobile />
			)}
      
      
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