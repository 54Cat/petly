import { HeaderNavLink } from './HeaderAuthNavStyled';

  const HeaderAuthNav = () => {
    return (
      <nav>
        <HeaderNavLink
          to="/news"
        >
          Login
        </HeaderNavLink>
        <HeaderNavLink
          to="/notices"
        >
          Registration
        </HeaderNavLink>
      </nav>
    );
  };

  export default HeaderAuthNav;