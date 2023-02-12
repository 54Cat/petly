import { useState } from 'react';
import ModalContent from './formAddNotice';

import {
    
    ModalStyled,
    CloseBtn,
    StyledIcon,
    BtnAddPet,
    WrapBtn,
    TextBtn,
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
        <>
            <WrapBtn>
                <TextBtn>Add pet</TextBtn>
                <BtnAddPet onClick={openModal}></BtnAddPet>
            </WrapBtn>
            <ModalStyled
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: { 
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
        </>
    );
};

export default ModalAddNewNotice;
