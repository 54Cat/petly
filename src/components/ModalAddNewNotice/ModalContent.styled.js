import styled from '@emotion/styled';

export const ModalCard = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 60px 20px 40px;
    background-color: #ffffff;
    border-radius: 20px;

    display: flex;
    flex-direction: column;

    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        padding: 32px 24px 32px 20px;
        width: 704px;
        border-radius: 40px;
    }
`;
