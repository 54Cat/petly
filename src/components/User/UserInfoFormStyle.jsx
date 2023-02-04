import styled from '@emotion/styled';
// import { BsCheckLg } from 'react-icons/bs';

// const img = <BsCheckLg />;

export const Lable = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    :not(:last-child) {
        margin-bottom: 4px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    padding-left: 16px;
    /* padding-right: 12px; */
    margin-bottom: 44px;
`;

export const Conteiner = styled.div`
    display: flex;
    margin-right: 12px;
`;

export const Input = styled.input`
    width: 141px;
    border-radius: 40px;
    border: none;
    margin-right: 9px;
    padding: 4px 0 4px 18px;
    outline: none;
    :focus,
    :hover {
        background: #fdf7f2;
        border: 1px solid rgba(245, 146, 86, 0.5);
    }
`;

export const ButtonCreate = styled.button`
    display: flex;
    align-items: center;
    width: 26px;
    height: 26px;

    background: #fdf7f2;
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;
