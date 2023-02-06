import styled from '@emotion/styled';

export const PetsWrapper = styled.div`
    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        width: 704px;
    }

    @media (min-width: 1200px) {
        width: 821px;
    }
`;

export const PetsTitle = styled.h2`
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
