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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 40px;
    border-color: white;
    background-color: red;

    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        width: 704px;
    }
`;

export const OpenBtn = styled.button`
   width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color:#F59256;
    border: 1px solid transparent; 
    line-height: 22px;
    letter-spacing: 0.04em;
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
