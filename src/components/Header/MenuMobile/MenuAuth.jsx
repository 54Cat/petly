import { MenuAuthNav } from './MenuAuthStyled';
import { MenuAuthNavLink } from './MenuAuthStyled';

const MenuAuth = () => {
    return (
      <MenuAuthNav>
        <MenuAuthNavLink
          to="/news"
        >
          Login
        </MenuAuthNavLink>
        <MenuAuthNavLink
          to="/notices"
        >
          Registration
        </MenuAuthNavLink>
    </ MenuAuthNav>
    );
  };


export default MenuAuth;