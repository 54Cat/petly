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

export const CategoriesBtn = styled(Button)`
 
  width:fit-content; 
  display: flex;
  flex-direction: row; 
  @media (min-width: 768px) {
         font-size: 20px;
        padding: 10px 28px;
     }
`;


// export const NavButton = styled.button`
//     font-size: 14px;
//     line-height: 1.36;
//     letter-spacing: 0.04em;
//     color: #111111;
//     background: #ffffff;
//     border: 2px solid #f59256;
//     border-radius: 40px;
//     padding: 8px 28px;
//     cursor: pointer;
//     @media (min-width: 768px) {
//         font-size: 20px;
//         padding: 10px 28px;
//     }
// `;

export const AddNoticeForm = styled.form`
 display: flex;
 flex-direction: column; 
 padding: 10px;
 margin-bottom: 40px;
`;


export const FormLabel = styled.label`
  margin-top: 38px;
  margin-bottom: 12px;  
  font-weight: 500px;
  font-size: 24px;
  line-height: 1.08;   
`;

export const TitleColor = styled.span`
    color: #f59256;
`;

export const NoticeFormInput = styled.input`
  display:block;
  margin: 0;
  padding: 16px 10px;
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

