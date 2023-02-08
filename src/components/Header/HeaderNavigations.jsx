import { Nav, HeaderNavLink } from './HeaderNavigationsStyled';

  const Navigations = () => {
    return (
      <Nav>
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
      </Nav>
    );
  };

  export default Navigations;