import styled from '@emotion/styled';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

export const ModalStyled = styled(Modal)`
    position: absolute;
    width: 280px;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(1);
    border-radius: 20px;
    border-color: transparent;
    background-color: #FFFFFF;

    @media (min-width: 768px) {       
        width: 608px;
        height: 885px;
        padding: 40px;
        margin-top: 60px;
        column-gap: 32px;
    }
`;

export const WrapBtn = styled.div`
  /* z-index: 1; */
  display: flex;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
    
  left: auto;
  top: 419px;
  right: 20px;
@media (min-width: 768px) {  
  width: 129px;
  height:44px;
  top: 350px;
  right: 32px;
  } 
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
  @media (min-width: 1280px) {
  
   
    
  }
`;

export const BtnAddPet = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color:#F59256;
    border: 1px solid transparent;
::after {
        content: "Add pet";
        font-weight: 500;
        font-size: 12px;
        /* width:32px;
        height: 32px; */
        display: inline-block;
        /* margin-left: 12px; */
        /* background-image: url(/images/header/vector.svg);  */
        /* background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom; */
    }
    &:hover,
    &:focus {
      color: #FFFFFF;
      border-color: #F59256;
      background-color: #ECEBEB;
        }
 @media (min-width: 768px) { 
          
  width: 44px;
  height: 44px;
  ::after{
    display: none;
  }    
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

