import { useState } from 'react';
import ModalContent from './formAddNotice';

import {
    ModalStyled,
    CloseBtn,
    StyledIcon,
    OpenBtn,
    WrapAddPet,
} from './ModalAddNewNotice.styled';

const ModalAddNewNotice = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <WrapAddPet>
            <OpenBtn onClick={openModal}>Add pet</OpenBtn>
            <ModalStyled
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                    zIndex: '2',
                    overflowY: 'scroll',
                    backgroundColor: 'rgba(17, 17, 17, 0.6)',
                    },
                }}
            >
                <CloseBtn onClick={closeModal}>
                    <StyledIcon />
                </CloseBtn>

                <ModalContent Close={closeModal}></ModalContent>
            </ModalStyled>
        </WrapAddPet>
    );
};

export default ModalAddNewNotice;
