import { NavContainer, NavList, NavItem, HeaderNavLink } from './HeaderNavigationsStyled';

  const Navigations = ({active, setActive}) => {    
    return ( 
        
      <NavContainer className={active ? 'active' : ''} onClick={() => setActive(false)}>
        
      
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
              Our friends
            </HeaderNavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    );
};

  export default Navigations;