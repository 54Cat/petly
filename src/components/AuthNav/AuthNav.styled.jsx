import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';

export const AuthNavItem = styled.li`
    &:first-child {
        margin-right: 20px;
    }
`;
export const NavButtonLink = styled(Link)`
    display: inline-block;
    cursor: pointer;
    padding: 8px 28px;
    border: 2px solid #f59256;
    background-color: #ffffff;
    border-radius: 40px;
    color: #111111;
    letter-spacing: 0.04em;
    font-family: Manrope, sans-serif;
    font-size: 14px;
    line-height: 1.35;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: 768px) {
        padding: 8.5px 28px;
        font-size: 20px;
    }

    @media (min-width: 1280px) {
        padding: 10px 28px;
    }

    &:hover {
    background-color: #f59256;
    color: #FFFFFF;
    }

    &:focus {
    background-color: #f59256;
    color: #000000;
    border: 2px solid #000000;
    }

    &.active {
        background-color: #F59256;
        color: #FFFFFF;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
