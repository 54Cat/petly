import { MenuBottomNavLink } from './MenuBottomStyled';

const MenuBottom = () => {
    return (
        <nav>
        <MenuBottomNavLink
          to="/news"
        >
          Login
        </MenuBottomNavLink>
        <MenuBottomNavLink
          to="/notices"
        >
          Registration
        </MenuBottomNavLink>
      </nav>
    );
  };

export default MenuBottom;