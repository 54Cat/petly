import styled from '@emotion/styled';

export const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 18px;
    margin-top: 60px;
`;

export const Wrapper = styled.div`
    width: 280px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 20px;
    padding: 20px 0;
    margin-right: auto;
    margin-left: auto;
`;

export const Image = styled.img`
    background: url(.jpg);
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    margin: 0 auto 12px auto;
    border-radius: 50%;
`;

export const ButtonEdit = styled.button`
    display: flex;
    align-items: center;
    font-style: normal;
    width: 86px;
    height: 22px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: inherit;
    background-color: inherit;
    border: transparent;
    margin-left: auto;
    margin-right: 24px;
    padding: 0;
    cursor: pointer;
`;

export const Span = styled.span`
    margin-right: 5px;
    height: 25px;
`;

export const ButtonLogout = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    margin-left: auto;
    margin-right: 12px;
`;
