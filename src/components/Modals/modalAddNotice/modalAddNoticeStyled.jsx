import styled from '@emotion/styled';

export const AddNoticeForm = styled.form`
flex-direction: column;
 height: 120px;
 padding: 10px;
 margin-bottom: 40px;
 display: flex;
`;

export const AddNoticeWrapper = styled.div`
  width: 608px;
  height: 885px; 
  padding: 20px; 
  border-radius: 40px;
  background-color: #FFFFFF;
`;

export const CloseBtn = styled.button`
    border: none;
    background-color: transparent;
    width: 32px;
    height: 40px;
    padding: 0;
    position: absolute;
    top: 3px;
    right: 0;
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
