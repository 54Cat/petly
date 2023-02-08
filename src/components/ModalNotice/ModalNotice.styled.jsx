import styled from '@emotion/styled';
import Modal from 'react-modal';

export const ModalNoticeStyled = styled(Modal)`
    background-color: red;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);

    @media (min-width: 320px) {
        width: 280px;
    }

    @media (min-width: 768px) {
        width: 704px;
    }
`;
