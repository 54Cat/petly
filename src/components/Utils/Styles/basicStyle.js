import styled from '@emotion/styled';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.38;
    width: 248px;
    height: 38px;
    color: #f59256;
    background: #ffffff;
    border: 2px solid #f59256;
    border-radius: 40px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 28px;
    cursor: pointer;
    &:hover,
    &:focus {
        color: #ff6101;
        border-color: #ff6101;
    }
`;

export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #111321;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    padding-top: 40px;
    text-align: center;

    @media (min-width: 768px) {
        padding-top: 90px;
        font-size: 48px;
    }

    @media (min-width: 1280px) {
        padding-top: 60px;
    }
`;

export const InputSearch = styled.input`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    width: 244px;
    height: 44px;
    color: #535353;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 40px;
    border: none;
    outline: none;
    &:hover,
    &:focus {
        border: 1px solid rgba(245, 146, 86, 0.5);
    }

    @media (min-width: 480px) {
        width: 380px;
    }
    @media (min-width: 768px) {
        width: 608px;
    }
`;

//examples for adaptive App. How use see above.
// @media (min-width: 320px) {
//         width: 380px;
//     }
//     @media (min-width: 768px) {
//         width: 608px;
//     }
// @media (min-width: 1280px) {
//         width: 608px;
//     }
