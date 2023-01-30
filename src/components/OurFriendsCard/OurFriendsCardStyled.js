import styled from '@emotion/styled';

const Card = styled.li`
display: inline-block;
box-shadow:7px 4px 14px rgba(49, 21, 4, 0.07);
background-color: #FFFFFF;
border-radius: 40px;`

const FlexBox = styled.div`
display:flex;
align-items: center;`

const Info = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.35;
color: #000000;`

const InfoLink = styled.a`
text-decoration: none;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.35;
color: #000000;
`

export {
    Card, 
    FlexBox,
    Info,
    InfoLink
}