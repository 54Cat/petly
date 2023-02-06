import styled from '@emotion/styled';

const Title = styled.h3`
margin-bottom: 40px;
text-align: center;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 1.37;

color: #111111;

@media(min-width: 768px){
font-size: 36px;
line-height: 1.36;
}
`;

const Input = styled.input`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.6;

width: 448px;
height: 48px;

:active,
    :hover,
    :focus {
        outline: 0;
        outline-offset: 0;
    }
background: #fdf7f2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
display: block;
    ::placeholder {
        padding: 10px 16px;
        color: rgba(17, 17, 17, 0.6);
    }
    margin: 0 auto;
    margin-top: 12px;
    margin-bottom: 28px;
// :last-child {
//     margin-bottom: 40px;
// }
    
`;

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
display: block;
margin: 0 auto;

width: 280px;
height: 530px;
//text-align: center;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 40px;
@media(min-width: 768px) {
    width: 608px;
    height: 570px;
}
`;

const FormDiv = styled.div`
padding: 40px 80px;
`;

const FormsAdds = styled.form`
    
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    
    
    margin-left: auto;
    margin-right: auto;
`

export {
    Title,
    Input,
    Overlay,
    ModalItem,
    FormDiv,
    FormsAdds,
    FlexBox
}