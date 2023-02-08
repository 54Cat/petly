import styled from '@emotion/styled';

export const NoticesList = styled.ul`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
margin-top: 30px;
@media (min-width: 768px) {
    margin-top: 60px;
        column-gap: 32px;
    }
`

export const NoticesItem = styled.li`
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 0px 40px 40px;
position: relative;
flex-basis: 100%;

@media (min-width: 768px) {
flex-basis: calc((100% - 32px) / 2)

    }
    @media (min-width: 1280px) {
    flex-basis: calc((100% - 96px) / 4)
    }
    `