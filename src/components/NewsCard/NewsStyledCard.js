import styled from '@emotion/styled';

const NewsItem = styled.li`
display: block;
width: 280px;
height: 286px;
margin-bottom: 40px;
@media(min-width: 768px){
    margin: 30px;
    width: 336px; 
}
@media(min-width: 1280px){
    margin: 36px; 
    width: 392px;
    height: 266px;
}

`

const DecorLine = styled.div`
background-color: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
border-radius: 40px;
width: 200px;
height: 4px;
margin-bottom: 4px;
@media(min-width: 768px){
    width: 280px;
    height: 8px;
}
@media(min-width: 1280px){
    width: 340px;
}
`

const NewsFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const TitleNews = styled.h3`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 1.37;
letter-spacing: -0.01em;
margin-bottom: 16px;
color: #111111;
`
const NewsInfo = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: #111321;
margin-bottom: 20px;
@media(min-width: 768px){
    margin-bottom: 40px;
}
`
const NewsDate = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: rgba(17, 17, 17, 0.6);
`

const NewsLink = styled.a`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1.37;
text-decoration-line: underline;
color: #F59256;
&:hover, :focus{
    color: #FF6101;
} 
`

export {
    NewsItem,
    DecorLine,
    TitleNews,
    NewsInfo,
    NewsDate,
    NewsLink,
    NewsFooter,
}