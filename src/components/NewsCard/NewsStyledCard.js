import styled from '@emotion/styled';

export const NewsItem = styled.li`
    display: block;
    flex-basis: 100%;

    @media (min-width: 768px) {
        flex-basis: calc((100% - 32px) / 2);
        height: 284px;
    }
    
    @media (min-width: 1280px) {
        flex-basis: calc((100% - 64px) / 3);
        height: 266px;
    }
`;

export const DecorLine = styled.div`
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;
    display: block;
    flex-basis: 100%;
    height: 4px;
    margin-bottom: 4px;

    @media (min-width: 768px) {
        flex-basis: calc((100% - 32px) / 2);
        height: 8px;
    }
    
    @media (min-width: 1280px) {
        flex-basis: calc((100% - 64px) / 3);
        
    }
`;

export const NewsFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleNews = styled.h3`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.37;
    letter-spacing: -0.01em;
    margin-bottom: 16px;
    color: #111111;
`;

export const NewsInfo = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: #111321;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 40px;
    }
`;

export const NewsDate = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: rgba(17, 17, 17, 0.6);
`;

export const NewsLink = styled.a`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    text-decoration-line: underline;
    color: #f59256;

    &:hover,
    :focus {
        color: #ff6101;
    }
`;
