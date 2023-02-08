import styled from '@emotion/styled';

export const NoticeCard = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 20px 40px;
    background: #ffffff;
    border-radius: 20px;

    display: flex;
    flex-direction: column;

    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        padding: 20px;
        width: 704px;
        border-radius: 40px;
    }

    @media (min-width: 1280px) {
        width: 821px;
        &:not(:last-child) {
            margin-bottom: 22px;
        }
    }
`;

export const PetInfo = styled.div`
    @media (min-width: 768px) {
        display: flex;
    }
`;

export const PetsImg = styled.img`
    margin-bottom: 20px;
    border-radius: 0px 0px 40px 40px;

    @media (min-width: 320px) {
        width: 240px;
        height: 240px;
    }

    @media (min-width: 768px) {
        width: 288px;
        height: 328px;
    }
`;

export const TextContent = styled.div``;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;

    color: #000000;

    margin-bottom: 16px;
`;

export const PetData = styled.div`
    display: flex;
    margin-bottom: 28px;
`;

export const CategoryData = styled.ul`
    flex-grow: 1;
`;

export const ValueData = styled.ul``;

export const Comments = styled.p`
    font-size: 14px;
    line-height: 19px;
`;

export const CommentsTitle = styled.span`
    font-weight: 600;
`;
