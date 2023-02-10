import styled from '@emotion/styled';

export const List = styled.ol`
    display: flex;
    flex-wrap: wrap;
    background-color: #fdf7f2;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;
`;

export const Card = styled.li`
    position: relative;
    display: block;
    flex-basis: 100%;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    background-color: #ffffff;
    border-radius: 40px;
    padding: 12px 4px;

    @media (min-width: 768px) {
        flex-basis: calc((100% - 32px - 16px) / 2);
        padding: 16px 4px;
    }
    @media (min-width: 1280px) {
        flex-basis: calc((100% - 64px - 24px) / 3);
    }
`;

export const Title = styled.h3`
    text-align: center;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.33;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration-line: underline;
    height: 40px;
    margin-bottom: 10px;
    color: #f59256;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 1.37;
        margin-bottom: 16px;
    }
    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 1.35;
    }
    &:hover,
    :focus {
        color: #ff6101;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 110px;
    height: 78px;
    margin-right: 12px;
    @media (min-width: 768px) {
        width: 120px;
        height: 85px;
        margin-right: 14px;
    }
    @media (min-width: 1280px) {
        width: 158px;
        height: 112px;
        margin-right: 16px;
    }
`;

export const Info = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: #000000;
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 1.35;
    }
    @media (min-width: 1280px) {
        font-size: 16px;
        line-height: 1.37;
    }
`;

export const InfoTime = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    //margin-bottom: 4px;
    color: #000000;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 1.35;
    }

    @media (min-width: 1280px) {
        font-size: 16px;
        line-height: 1.37;
    }
    
    &:hover,
    :focus {
        color: #f59256;
    }
`;

export const InfoLink = styled.a`
    text-decoration: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: #000000;
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 1.35;
    }
    @media (min-width: 1280px) {
        font-size: 16px;
        line-height: 1.37;
    }
    &:hover,
    :focus {
        color: #f59256;
    }
`;

export const AddressLink = styled.a`
    
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    //line-height: 16px;
    line-height: 1.33;
    color: #000000;
    text-decoration-line: underline;
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 19px;
    }
    @media (min-width: 1280px) {
        font-size: 16px;
        line-height: 22px;
    }
    &:hover,
    :focus {
        color: #f59256;
    }
`;

export const SpanInfo = styled.span`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    text-decoration: none;
    color: #000000;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 1.35;
    }
    @media (min-width: 1280px) {
        font-size: 16px;
        line-height: 1.37;
    }
`;

export const BoxInfo = styled.div`
    // margin-bottom: 4px;
    :not(:last-child) {
        margin-bottom: 4px;
    }
    @media (min-width: 768px) {
        :not(:last-child) {
        margin-bottom: 8px;
    }
    }
    @media (min-width: 1280px) {
        :not(:last-child) {
        margin-bottom: 12px;
    }
    }
    // &:last-child {
    //     margin-bottom: 0px;
    // }
    
`;