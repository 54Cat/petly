import styled from '@emotion/styled';

const List = styled.ol`
display: flex;
flex-wrap: wrap;
background-color: #FDF7F2;
align-items: center;
justify-content: center;
padding: 0px;
margin: 0px;
`

const Card = styled.li`
display: block;
padding: 12px 4px;
width: 280px;
height: 192px;
box-shadow:7px 4px 14px rgba(49, 21, 4, 0.07);
background-color: #FFFFFF;
border-radius: 40px;
@media(min-width: 320px){
    margin: 12px 20px;
}
@media(min-width: 768px){
    margin: 16px;
}
`

const Title = styled.h3`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 1.33;
display: flex;
align-items: center;
justify-content: center;
text-decoration-line: underline;
color: #F59256;`

const FlexBox = styled.div`
display:flex;
align-items: center;`

const Info = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #000000;`

const InfoLink = styled.a`
text-decoration: none;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #000000;
`

export {
    List,
    Card, 
    Title,
    FlexBox,
    Info,
    InfoLink
}