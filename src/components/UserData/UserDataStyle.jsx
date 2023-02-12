import styled from '@emotion/styled';

export const UserCard = styled.div`
    width: 100%;
    @media (min-width: 320px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1280px) {
        width: 411px;
    }
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    margin-bottom: 18px;

    @media (min-width: 768px) {
        font-size: 28px;
        margin-bottom: 40px;
        padding-left: 32px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 24px;
    }
`;

export const FormContainer = styled.div`
    @media (min-width: 768px) {
        padding-left: 32px;
    }
    @media (min-width: 1280px) {
        padding: 16px;
    }
`;

export const Wrapper = styled.div`
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 20px;
    padding: 20px 0;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 320px) {
        width: 280px;
    }
    @media (min-width: 768px) {
        position: relative;
        /* left: -32px; */
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
        width: 768px;
        border-radius: 0px 40px 40px 0px;
        padding: 0;
        margin-left: 0;
    }
    @media (min-width: 1280px) {
        flex-direction: column;
        width: 411px;
        left: 0;
    }
`;

export const Container = styled.div`
    margin-bottom: 32px;
    @media (min-width: 768px) {
        margin: 24px 40px 24px 52px;
    }
    @media (min-width: 1280px) {
        width: 100%;
        margin: 0;
        margin-bottom: 36px;
    }
`;

export const Image = styled.img`
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    margin: 0 auto 12px auto;
    border-radius: 50%;
    object-fit: contain;
    @media (min-width: 768px) {
        margin-bottom: 8px;
    }
    @media (min-width: 1280px) {
        margin: 20px auto 0 auto;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    background-color: inherit;
    margin-left: auto;
    margin-right: 24px;
    padding: 0;
    cursor: pointer;
    @media (min-width: 768px) {
        margin-right: 0;
    }
    @media (min-width: 1280px) {
        margin-right: 16px;
        margin-top: -24px;
    }
`;

export const Input = styled.input`
    display: none;
`;

export const ButtonLogout = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
    border: none;
    margin-left: auto;
    padding: 0;
    margin-right: 12px;
    cursor: pointer;
    :hover,
    :focus {
        color: #f59256;
    }
    @media (min-width: 768px) {
        margin: 0;
        padding-left: 32px;
    }
    @media (min-width: 1280px) {
        padding-left: 16px;
    }
`;
