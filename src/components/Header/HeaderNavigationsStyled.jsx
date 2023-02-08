import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
`;

export const NavItem = styled.li`
margin-right: 80px; 
&:not::last-child {
        margin-right: 0;
    }
`;

export const HeaderNavLink = styled(NavLink)`
cursor: pointer;
font-weight: 500;
font-size: 20px;
line-height: 1.4;
letter-spacing: 0.04em;
color: #181C27;


&.active {
    color: #F59256;
    text-decoration: underline;
}

&:hover{
  color: #F59256;
}
`;