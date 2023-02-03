import React from 'react';
import { AuthNavItem, NavButtonLink } from './AuthNav.styled';

const AuthNav = () => {
    return (
        <>
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
        </>
    );
};

export default AuthNav;
