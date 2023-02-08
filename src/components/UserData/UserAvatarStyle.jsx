import styled from '@emotion/styled';

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
    width: 233px;
    height: 233px;
    object-fit: cover;
    @media (min-width: 768px) {
        margin-bottom: 8px;
    }
    @media (min-width: 1200px) {
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
