import styled from '@emotion/styled';
import { Button } from 'components/Utils/Styles/basicStyle';

export const NoticeCard = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 60px 20px 40px;
    background: #ffffff;
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

export const PetInfo = styled.div`
    @media (min-width: 768px) {
        display: flex;
    }
`;

export const ImgWrapper = styled.div`
    position: relative;
`;

export const CategoryName = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #111111;
`;

export const Category = styled.span`
    position: absolute;
    top: 20px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0px 20px 20px 0;
    @media (min-width: 320px) {
        width: 158px;
        height: 28px;
    }
`;

export const PetsImg = styled.img`
    margin-bottom: 20px;
    border-radius: 0px 0px 40px 40px;
    object-fit: cover;

    @media (min-width: 320px) {
        width: 240px;
        height: 240px;
    }

    @media (min-width: 768px) {
        width: 288px;
        height: 328px;
        margin-right: 20px;
        margin-bottom: 28px;
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

    @media (min-width: 768px) {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 20px;
    }
`;

export const PetData = styled.div`
    display: flex;
    margin-bottom: 28px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const DataItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media (min-width: 768px) {
        flex-grow: 0;
        margin-right: 51px;
    }
`;

export const CategoryData = styled.ul`
    flex-grow: 1;

    @media (min-width: 768px) {
        flex-grow: 0;
        margin-right: 51px;
    }
`;

export const CategoryText = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const ValueData = styled.ul``;

export const ValueText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const Comments = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    margin-bottom: 40px;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 32px;
    }
`;

export const CommentsTitle = styled.span`
    font-weight: 600;
`;

export const Buttons = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: end;
        padding-right: 16px;
    }
`;

export const ActionBtn = styled(Button)`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: #111111;

    &:hover {
        background-color: rgba(245, 146, 86, 1);
        color: white;
    }

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    @media (min-width: 320px) {
        width: 240px;
        height: 40px;
    }

    @media (min-width: 768px) {
        margin: 0;
        width: 160px;
        height: 40px;
        &:not(:last-child) {
            margin-right: 12px;
            margin-bottom: 0;
        }
    }
`;
