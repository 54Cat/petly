import styled from "@emotion/styled";



export const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 18px;
    margin-top: 60px;
`;

export const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 20px;
    padding: 20px 0;
`;

export const Image = styled.img`
    
    background: url(.jpg);
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    margin: 0 auto 12px auto;
`;

export const ButtonEdit = styled.button`
    display: flex;
    align-items: flex-start;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: inherit;
    background-color: inherit;
    border:transparent;
    margin-left: auto;
    margin-right: 24px;
    padding: 0;
    cursor: pointer;
`;

export const Span = styled.span`
margin-right: 5px;
`;

export const Lable = styled.label`
/* font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
/* display: flex;
align-items: center; */ 
/* letter-spacing: 0.04em; */
margin-right: 25px;
`;

export const Form = styled.form`
display: flex;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
display: flex;
align-items: center;
letter-spacing: 0.04em;
/* margin-left: 25px; */
margin-bottom: 44px;
`;


export const Input = styled.input`
width: 160px;
background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
margin-right: 10px;
padding: 4px 0;
`

export const ButtonCreate = styled.button`
display: flex;
align-items: center;
width: 26px;
height: 26px;

background: #FDF7F2;
backdrop-filter: blur(2px);
border:none ;
border-radius: 50%;
cursor: pointer;
`;

export const ButtonLogout = styled.button`
display: flex;
background-color: transparent;
border: none;
margin-left: auto;
margin-right: 12px;
/* margin: 0 12px 20px auto; */
/* margin-bottom: 20px; */
`