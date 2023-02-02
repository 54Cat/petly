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
    width: 280px;
    background: #FFFFFF;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 20px;
    padding: 20px 0;
    margin-right: auto;
    margin-left: auto;
`;

export const Image = styled.img`
    
    background: url(.jpg);
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    margin: 0 auto 12px auto;
`;

export const ButtonEdit = styled.button`
    display: flex;
    align-items: center;
    font-style: normal;
    width: 86px;
    height: 22px;
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
    height: 25px;

`;

export const Lable = styled.label`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
:not(:last-child){
    margin-bottom: 4px;
}

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
letter-spacing: 0.04em;
padding-left: 16px;
/* padding-right: 12px; */
margin-bottom: 44px;
`;

export const Conteiner = styled.div`
display: flex;
margin-right: 12px;

`;

export const Input = styled.input`
width: 141px;
border-radius: 40px;
border: none;
margin-right: 9px;
padding: 4px 0 4px 18px;
outline: none;
:focus{
background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);

}
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
`