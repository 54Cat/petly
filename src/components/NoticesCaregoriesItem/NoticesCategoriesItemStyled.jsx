import styled from '@emotion/styled';
import { Button } from '../../components/Utils/Styles/basicStyle';

export const NoticesItem = styled.li`
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 0px 40px 40px;
    position: relative;
    flex-basis: 100%;

    @media (min-width: 768px) {
        flex-basis: calc((100% - 32px) / 2);
    }
    @media (min-width: 1280px) {
        flex-basis: calc((100% - 96px) / 4);
    }
`;

export const NoticesThumb = styled.div`
    position: relative;
    padding: 6px 50px 7px 20px;

    @media (min-width: 1280px) {
        padding: 6px 50px 6px 20px;
    }
`;

export const NoticesImageThumb = styled.div`
    width: 100%;
    height: 288px;
`;

export const NoticesImage = styled.img`
    display: block;
    height: 100%;
    width: 100%;

    object-fit: cover;
`;

export const NoticesCategoryNameContainer = styled.div`
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
    border-radius: 0px 40px 40px 0px;
    position: absolute;
    top: 20px;
    padding: 6px 53px 6px 20px;

    @media (min-width: 1280px) {
        padding: 6px 50px 6px 20px;
    }
`;

export const NoticesCategoryName = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;

    align-items: center;
    letter-spacing: 0.04em;

    color: #111111;

    @media (min-width: 1280px) {
        font-family: 'Manrope';
        line-height: 1.33;
    }
`;

export const NoticesFavoriteBtn = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &:focus {
        cursor: pointer;
    }
`;

export const Favorite = styled.img`
    width: 24px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NoticesCardThumb = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 12px;

    color: #111111;
`;

export const NoticesCardTitle = styled.h2`
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 28px;
    line-height: 1.36;
    letter-spacing: -0.01em;
    text-align: left;

    color: #111111;
`;

export const NoticesCardInfoThumb = styled.div`
    margin-top: 20px;
    display: flex;

    margin-bottom: 20px;
`;

export const NoticesCardInfoList = styled.ul`
    text-align: left;

    &:not(:last-child) {
        margin-right: 40px;
    }

    @media (min-width: 1280px) {
        &:not(:last-child) {
            margin-right: 37px;
        }
    }
`;

export const NoticesCardInfoItem = styled.li`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.38;

    display: flex;
    align-items: center;
    text-align: center;

    color: #111111;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const BtnThumb = styled.div`
    height: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const BtnDelete = styled(Button)`
    margin-top: 12px;
`;

export const BasketWraper = styled.div`
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 13px;
`;

export const Basket = styled.svg`
    align-items: center;
    justify-content: center;
    fill: #F59256;

    .btnDel:hover &,
    .btnDel:focus & {
        fill: #FF6101;}
`;

