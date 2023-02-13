import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const NoticesCategoriesNavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;

    @media (min-width: 768px) {
       margin-top: 40px;
    }
`

export const NoticesCategoriesNavButton = styled(NavLink)`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: #111111;
    background: #FFFFFF;
    border: 2px solid #F59256;
    border-radius: 40px;
    padding: 8px 28px;
    cursor: pointer;

    @media (min-width: 768px) {
       font-size: 20px;
       padding: 10px 28px;
    }
`