import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    padding-top: 64px;

    transform: translateX(100%);

    &.active {
      z-iddex: 1;      
      transform: translateX(0);
      transition: all 0.3s;
      display: flex;
    }
  }
      
  @media (min-width: 1280px) {
    
    transform: translateX(0);
    align-items: center;
    padding-top: 0;
    
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 1280px) {
    display: flex;

    flex-direction: row;
    align-items: center;
  }

`;

export const NavItem = styled.li`
margin-bottom: 40px; 
&:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
}

@media (min-width: 1280px) {
  margin-bottom: 0;
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

@media (min-width: 768px) {
  font-size: 48px;
}

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