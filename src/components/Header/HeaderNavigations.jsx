import { NavContainer, NavList, NavItem, HeaderNavLink } from './HeaderNavigationsStyled';

  const Navigations = () => {
    return (
      <NavContainer>
        <NavList>
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
        </NavList>
      </NavContainer>
    );
};

  export default Navigations;