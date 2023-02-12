import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    @media (min-width: 768px) {
        display: block;
        margin-top: 88px;
    }

    @media (min-width: 1280px) {
        flex-direction: row;
        align-items: start;
        margin-top: 38px;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 815px;
    @media (min-width: 768px) {
        right: 32px;
        top: 207px;
    }
    @media (min-width: 1280px) {
        top: 170px;
    }
`;
export const ErrorMessage = styled.p`
    color: #ff0505;
    font-size: 30px;
`;
