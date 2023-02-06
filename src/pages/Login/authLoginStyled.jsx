import styled from '@emotion/styled';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const DivForm = styled.div`
    padding: 20px;
    @media (min-width: 320px) {
        background: transparent;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 768px) {
        width: 568px;
        height: 477px;
        background: #ffffff;

        box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
        border-radius: 40px;
    }
    @media (min-width: 1280px) {
        width: 578px;
        height: 433px;
        background: #ffffff;

        box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
        border-radius: 40px;
    }
`;

export const Forms = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const Title = styled.h2`
    font-family: 'Manrope';
    text-align: center;
    @media (min-width: 320px) {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 49px;
        margin-bottom: 40px;
    }
    @media (min-width: 768px) {
        margin-top: 60px;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 49px;
        margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 49px;
        margin-top: 60px;

        margin-bottom: 40px;
    }
`;

export const Input = styled(Field)`
    :active,
    :hover,
    :focus {
        outline: 0;
        outline-offset: 0;
    }
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    display: block;
    ::placeholder {
        color: rgba(17, 17, 17, 0.6);
    }
    margin: 0 auto;
    @media (min-width: 320px) {
        margin-top: 15px;
        width: 256px;
        height: 36px;
        padding-left: 20px;
    }
    @media (min-width: 768px) {
        width: 424px;
        height: 48px;
        padding-left: 20px;
        margin-top: 16px;
    }
    @media (min-width: 1280px) {
        margin-top: 16px;
        padding-left: 20px;
        width: 434px;
        height: 48px;
    }
`;
export const Button = styled.button`
    transition: 0.3s;
    &:hover,
    &:focus {
        color: #ff6101;
        border-color: #ff6101;
    }
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Manrope';
    background: #f59256;
    border-radius: 40px;
    color: white;
    margin: 40px auto;
    border: none;

    @media (min-width: 320px) {
        width: 280px;
        height: 44px;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        width: 448px;
        line-height: 25px;
        letter-spacing: 0.04em;
        height: 44px;
        font-size: 20px;
        display: flex;
        align-items: center;
        display: block;
    }
    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 25px;

        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        width: 458px;
        height: 48px;

        display: block;
    } ;
`;

export const Text = styled.p`
    @media (min-width: 320px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1280px) {
    }
    font-family: 'Manrope';
    font-size: 12px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.6);
    text-align: center;
`;
export const FormError = styled.p`
    color: #f59256;
    margin-left: 90px;
    margin-top: 2px;
`;
export const Link = styled(NavLink)`
    transition: all 600ms ease;
    &:hover,
    &:focus {
        opacity: 0.5;
    }
    color: #3091eb;
    margin-left: 3px;
`;
// export const Link = styled(Link)``;
