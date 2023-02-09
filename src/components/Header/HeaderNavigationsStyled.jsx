import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  
	background-color: #095;
  
  @media (min-width: 768px) {
  }
      
  @media (min-width: 1280px) {
    
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.li`
margin-bottom: 40px; 
&:last-child {
  margin-bottom: 0;
}

@media (min-width: 1280px) {
  margin-right: 80px; 

  &:last-child {
    margin-right: 0;
  }   
}
`;

export const HeaderNavLink = styled(NavLink)`
cursor: pointer;
color: #181C27;
font-weight: 500;
font-size: 32px;
line-height: 1.4;
letter-spacing: 0.04em;

@media (min-width: 1280px) {
  font-size: 20px;
}

&.active {
    color: #F59256;
    text-decoration: underline;
}

&:hover{
  color: #F59256;
}
`;