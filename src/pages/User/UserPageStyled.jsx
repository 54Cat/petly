import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    row-gap: 45px;

    @media (min-width: 768px) {
        padding-top: 160px;
        row-gap: 20px;
    }
    
    @media (min-width: 1280px) {
        flex-direction: row;
        align-items: start;
        padding-top: 125px;
        row-gap: 0;
        column-gap: 32px;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute; 
    right: 20px; 
    top: 815px;

    @media (min-width: 768px) {
        right: 32px;
        top: 625px;
    }

    @media (min-width: 1280px) {
        top: 170px;
    }
`;

export const ErrorMessage = styled.p`
    color: #ff0505;
    font-size: 30px;
`;