import styled from '@emotion/styled';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

export const ModalNoticeStyled = styled(Modal)`
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

    @media (min-width: 768px) {
        width: 36px;
        height: 36px;
    }
`;
