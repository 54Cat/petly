import React from 'react';
import { AuthNavContainer, AuthNavItem, NavButtonLink } from './AuthNav.styled';

const AuthNav = ({active, setActive}) => {
    return (
        <AuthNavContainer  className={active ? 'active' : ''} >
            <AuthNavItem>
                <NavButtonLink
                    to="/login"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Login
                </NavButtonLink>
            </AuthNavItem>
            <AuthNavItem>
                <NavButtonLink
                    to="/register"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Registration
                </NavButtonLink>
            </AuthNavItem>
        </AuthNavContainer>
    );
};

export default AuthNav;
