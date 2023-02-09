import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserNavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0 60px 0;
    
    @media (min-width: 768px) {
	// background-color: #147;
    padding: 0;
    }
        
    @media (min-width: 1280px) {
        
    }
`;

export const AccountButton = styled(Link)`
    padding: 8px 37px;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    background-color: #f59256;
    color: #ffffff;
    border: 2px solid #f59256;
    border-radius: 40px;
    line-height: 1.35;
    transition: color 250ms linear, border 250ms linear;

    :hover {
        background-color: #fdf7f2;
        border: 1px solid rgba(245, 146, 86, 0.5);
        color: #111111;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        padding: 11px 28px;
        font-size: 16px;
    }

    div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;
        @media (min-width: 768px) {
            width: 23px;
            height: 23px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const CircleIcon = styled(AccountCircleIcon)`
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
        width: 23px;
        height: 23px;
    }
`;
