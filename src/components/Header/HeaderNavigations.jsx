import { HeaderNavLink } from './HeaderNavigationsStyled';

  const Navigations = () => {
    return (
      <nav>
        <HeaderNavLink
          to="/news"
        >
          News
        </HeaderNavLink>
        <HeaderNavLink
          to="/notices"
        >
          Find pet
        </HeaderNavLink>
        <HeaderNavLink
          to="/friends"
        >
          Our friend
        </HeaderNavLink>
      </nav>
    );
  };

  export default Navigations;