import styled from '@emotion/styled';
import Modal from 'react-modal';
import { Button } from 'components/Utils/Styles/basicStyle';

export const CategoriesBtn = styled(Button)`
  display: flex;
  flex-direction: row;
  bottom: 16px;
  padding: 28px 10px;
  align-items: flex-start;
  padding: 10px 28px;
  border: 2px solid #F59256;
 border-radius: 40px;
`;


export const AddNoticeForm = styled.form`
 display: flex;
 flex-direction: column;
 
 padding: 10px;
 margin-bottom: 40px;

`;

export const AddNoticeWrapper = styled.div` 
  padding: 40px;
  border-radius: 40px;
  background-color: #FFFFFF;
`;

export const CloseBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width:34px;    
    height: 34px;
    padding: 0;   
    margin-left: auto;   
    top: 3px;
    right: 0;
    border: none;
    background-color: transparent;
    transition: transform .25s cubic-bezier(.4,0,.2,1);

`;
export const AddNoticeTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  line-height: 1.36;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 28px;
  font-size: 20px;
  line-height: 1.35;
  text-align: center;
`;

export const CategorierList = styled.ul`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
margin-top: 30px;
@media (min-width: 768px) {
    margin-top: 60px;
        column-gap: 32px;
        
    }
`;



export const FormLabel = styled.label`
  margin-bottom: 12px;  
  font-weight: 500px;
  font-size: 24px;
  line-height: 1.08;   
`;


export const FormInput = styled.input`
  display:block;
  margin: 0;
  padding: 10px 42px;
  font: inherit;
  font-size: 18px;
  outline: none;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: #FDF7F2;
   ::placeholder {
        color: rgba(17, 17, 17, 0.6);
    }
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 180px; 
  background-color: #F59256;
  border-radius: 40px;
  color: white;
`;

export const ModalStyle = styled(Modal)`
  position: absolute;
  width: 280px;
  height: 813px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  padding: 20px;
  border-radius: 20px;
  background-color: red;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    margin-top: 60px;
    column-gap: 32px;
    width: 608px;
    height: 885px;
    padding: 40px;
    }
  `;
