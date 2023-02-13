import styled from '@emotion/styled';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

export const WrapAddPet = styled.div`
    position: fixed;
    z-index: 1;
    right: 0;
`;

export const ModalStyled = styled(Modal)`
    position: absolute;
    width: 280px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 40px;
    border-color: white;

    @media (min-width: 768px) {
        width: 608px;
    }
`;
// кнопка добавления нотисов
export const OpenBtn = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 30px;
    color: #FFFFFF;
    background-color:#F59256;
    border: 1px solid transparent; 
    line-height: 22px;
    letter-spacing: 0.04em;
    @media (min-width: 768px) {  
        width: 44px;
        height:44px;   
   } 
`;

export const BtnBox = styled.div`
   display: flex;
   position: fixed; 
   justify-content: center;
   align-items: center;     
   left: 66%;
   top: 419px; 
   /* & > button {
    content: "Add pet";
  }   */
 @media (min-width: 768px) {  
   width: 129px;
   height:44px;
   top: 350px;
   left: 74%;
   } 
 @media (min-width: 1280px) {
   top: 320px;
   left: 82%;
   }
 /* @media (max-width: 1281px) {  
   left: 82%;
   }   */
`;
export const TextBtn = styled.h2`
   display: none; 
  @media (min-width: 768px) {        
     display: block;
     margin-right: 12px;
     font-weight: 500;
     font-size: 20px;
     line-height: 1.35;
   }
  
 
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 23px;
    right: 23px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 44px;
        height: 44px;
        top: 12px;
        right: 20px;
    }
`;

export const StyledIcon = styled(CloseIcon)`
    fill: black;
    width: 28px;
    height: 28px;

    &:hover {
        fill: rgba(245, 146, 86, 1);
    }

    @media (min-width: 768px) {
        width: 36px;
        height: 36px;
    }
`;
