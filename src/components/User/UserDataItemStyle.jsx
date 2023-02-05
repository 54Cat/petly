import styled from '@emotion/styled';

// const img = <BsCheckLg />;

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
    @media (min-width: 768px) {
        margin: 44px 0 33px 32px;
        padding: 0;
    }
`;
export const Lable = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    :not(:last-child) {
        margin-bottom: 4px;
    }
    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.39;
        letter-spacing: 0.04em;
    }
`;

export const Conteiner = styled.div`
    display: flex;
    margin-right: 12px;
    @media (min-width: 768px) {
        margin-right: 0;
    }
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
    @media (min-width: 768px) {
        width: 216px;
        font-size: 18px;
        line-height: 1.39;
        letter-spacing: 0.04em;
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
    @media (min-width: 768px) {
        justify-content: center;
        width: 32px;
        height: 32px;
    }
`;
