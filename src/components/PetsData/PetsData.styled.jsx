import styled from '@emotion/styled';

export const PetsWrapper = styled.div`
    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        width: 704px;
    }

    @media (min-width: 1280px) {
        width: 821px;
    }
`;

export const InfoWrapper = styled.div`
    position: relative;
    @media (min-width: 320px) {
        height: 40px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1280px) {
    }
`;

export const PetsTitle = styled.h2`
    position: relative;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;

    @media (min-width: 768px) {
        margin-bottom: 24px;
        font-size: 28px;
        line-height: 38px;
    }
`;
