import styled from '@emotion/styled';

export const UserCard = styled.div`
    margin-bottom: 46px;
    @media (min-width: 320px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1200px) {
    }
`;

export const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.04em;
    margin-bottom: 18px;

    @media (min-width: 768px) {
        font-size: 28px;

        line-height: 1.35;
        padding-left: 15px;
        margin-bottom: 40px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 24px;
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
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
        width: 736px;
        border-radius: 0px 40px 40px 0px;
        padding: 0;
        margin-left: 0;
    }
    @media (min-width: 1280px) {
        flex-direction: column;
        width: 411px;
        margin-right: 32px;
    }
`;
