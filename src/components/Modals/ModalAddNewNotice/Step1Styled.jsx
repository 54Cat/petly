import styled from '@emotion/styled';
import { Button } from 'components/Utils/Styles/basicStyle';

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

export const NavButton = styled(Button)`
  width:fit-content; 
  display: flex;  
  flex-wrap: wrap;
  gap: 8px;
  align-content: center;
  justify-content: center;
  font-weight: 500; 
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-right: 6px;
    margin-left: 6px; 
  }
`;

export const CategorierList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin-top: 28px;   
    justify-content: center;        
  }
`;

export const FormLabel = styled.label`
  margin-top: 16px;
  margin-bottom: 12px;  
  font-weight: 500px;
  font-size: 24px;
  line-height: 1.08;   
`;

export const NoticeFormInput = styled.input`
  display:block;
  margin: 0;
  padding: 11px 14px;
  font: inherit;
  font-size: 14px;
  outline: none;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: #FDF7F2;

  ::placeholder {
      color: rgba(17, 17, 17, 0.6);
  }
`;

export const AddNoticeForm = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 10px;
  margin-bottom: 40px;
`;

// export const AddNoticeForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   margin-bottom: 40px;
// `;