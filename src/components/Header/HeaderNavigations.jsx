import { NavContainer, NavItem, HeaderNavLink } from './HeaderNavigationsStyled';

  const Navigations = () => {
    return (
      <NavContainer>
          <NavItem>
            <HeaderNavLink
              to="/news"
            >
              News
            </HeaderNavLink>
          </NavItem>

          <NavItem>
            <HeaderNavLink
              to="/notices"
            >
              Find pet
            </HeaderNavLink>
          </NavItem>
          
          <NavItem>
            <HeaderNavLink
              to="/friends"
            >
              Our friend
            </HeaderNavLink>
          </NavItem>
      </NavContainer>
    );
};

  export default Navigations;