import styled from '@emotion/styled';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Form, Field} from 'formik';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 99px auto;
    justify-content: center;
    align-items: center;
    background: rgba(17, 17, 17, 0.6);
    
    z-index: 1200;
`;

const ModalItem = styled.div`
position: relative;
display: block;

width: 280px;
height: 550px;

background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 40px;
@media(min-width: 768px) {
    width: 608px;
    height: 590px;
}
`;

const ModalItemTwo = styled.div`
position: relative;
display: flex;
justify-content: center;

width: 280px;
height: 670px;

background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 40px;
@media(min-width: 768px) {
    width: 608px;
    height: 662px;
}
`
const TitleTwo = styled.h4`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1.37;
text-align: center;
margin-bottom: 20px;
@media(min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.01em;
}

color: #111111;

`

const ButtonCloseIcon = styled(HighlightOffIcon)`

width: 28px;
height: 28px;
fill: rgba(17, 17, 17, 0.6);

&:hover {
     fill: rgba(245, 146, 86, 1);
}
@media(min-width: 768px) {
     width: 36px;
    height: 36px;
}

`;

const ButtonCloseModal = styled.button`
position: absolute;

top: 20px;
right: 20px;

width: 34px;
height: 34px;

display: flex;
justify-content: center;
align-items: center;
position: absolute;
border: none;

color: #111111;

@media(min-width: 768px) {
    width: 44px;
    height: 44px;
    top: 25px;
    right: 25px;
}

background: #FDF7F2;
border-radius: 50%;
//border: rgba(0,0,0,0);
//outline: rgba(0,0,0,0);
z-index: 9999;
`;


const Title = styled.h3`
margin-bottom: 40px;
margin-top: 40px;
text-align: center;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 1.37;

color: #111111;

@media(min-width: 768px) {
font-size: 36px;
line-height: 1.36;
}
`;

const FormStyled = styled(Form)`
position: absolute;
top: 0px;
right: 0px;

margin: 0px 20px;
display: block;
@media(min-width: 768px) {
    margin: 0px 80px;
}
 `;

const FieldStyled = styled(Field)`
display: block;
width: 234px;
height: 40px; 
color: rgba(17, 17, 17, 0.6);
margin-top: 8px;
padding: 10px;  
background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;

:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
    border: 2px solid #FF6101;
}
    ::placeholder {
        padding: 11px 14px;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        color: rgba(27, 27, 27, 0.6);
        
        @media(min-width: 768px) {
            font-size: 16px;
            line-height: 1.62;
            color: rgba(17, 17, 17, 0.6);
        }
    }
@media(min-width: 768px) {
    width: 442px;
    height: 48px; 
    margin-top: 12px;
}
`;

const FieldPhoto = styled(Field)`
display: none;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 208px;
height: 208px;
background: #FDF7F2;
border-radius: 20px;
margin-bottom: 20px;
@media(min-width: 768px) {
    margin-bottom: 40px;
    width: 184px;
    height: 184px;
} 

`

const FieldTextarea = styled(Field)`
display: block;
width: 240px;
height: 100px;
background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 20px;
:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
    border: 2px solid #FF6101;
}
    ::placeholder {
        padding: 14px 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        color: rgba(27, 27, 27, 0.6);
    }

@media(min-width: 768px) {
    width: 394px;
    height: 116px;
}
`;

const LabelBox = styled.div`
margin-bottom: 16px;
@media(min-width: 768px) {
    margin-bottom: 28px;
}
`;

const StyledLabel = styled.label`
display: block;

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 1.47;
color: #111111;
@media(min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
}
`

const FlexBox = styled.div`

    justify-content: center;
    text-align: center;
    
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    @media(min-width: 768px) {
    display: flex;    
}
`;

const NextBtn = styled.button`
display: block;
width: 240px;
height: 40px;
margin-bottom: 12px;
color: #FFFFFF;
background: #F59256;
border-radius: 40px;
border: none;
: hover, :focus {
    border: 2px solid #FF6101;
}
@media(min-width: 768px) {
    width: 180px;
    height: 44px;
    margin-right: 20px;
}
`;

const CancelBtn = styled.button`
display: block;
width: 240px;
height: 40px;
background: #FFFFFF;
border: 2px solid #F59256;
border-radius: 40px;
: hover, :focus {
    border: 2px solid #FF6101;
}
@media(min-width: 768px) {
    
    width: 180px;
    height: 44px;
}
`;


const ErrorText = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: red;
`
export {
    Title,
    Overlay,
    ModalItem,
    ButtonCloseModal,
    FlexBox,
    ErrorText,
    ButtonCloseIcon,
    StyledLabel,
    FormStyled,
    FieldStyled,
    NextBtn,
    CancelBtn,
    LabelBox,
    ModalItemTwo,
    TitleTwo,
    FieldPhoto,
    FieldTextarea
}