import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 41px;

    @media (min-width: 768px) {
        margin-top: 68px;
    }

    @media (min-width: 1280px) {
        flex-direction: row;
        align-items: start;
        margin-top: 38px;
    }
`;

export const ErrorMessage = styled.p`
    color: #ff0505;
    font-size: 30px;
`;
