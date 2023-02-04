import styled from '@emotion/styled';

const ScheduleBox = styled.div`
position: absolute;
z-index: 2;
left: 178px;
top: 107px;
bottom: 20px;
width: 120px;
height: 160px;
padding: 12px;

background: #FFFFFF;
// border: 1px solid #F59256; 
// box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
// border-radius: 8px;

border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;

`
const ScheduleBoxItem = styled.div`

display: flex;
justify-content: space-between;
text-align: center;
margin-bottom: 4px;
&:last-child{
    margin-bottom: 0px;
}
`

const ScheduleInfo = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #000000;
`
export {
    ScheduleBox,
    ScheduleInfo,
    ScheduleBoxItem,
}