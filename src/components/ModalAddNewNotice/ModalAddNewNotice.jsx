import { useState } from 'react';
import ModalContent from './ModalContent';
import { useNavigate } from 'react-router-dom';
import {
    ModalStyled,
    CloseBtn,
    StyledIcon,
    OpenBtn,
} from './ModalAddNewNotice.styled';

const ModalAddNewNotice = id => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    function openModal() {
        navigate('./step1');
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <OpenBtn onClick={openModal}>Learn more</OpenBtn>
            <ModalStyled
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(17, 17, 17, 0.6)',
                    },
                }}
            >
                <CloseBtn onClick={closeModal}>
                    <StyledIcon />
                </CloseBtn>

                <ModalContent onClose={closeModal}></ModalContent>
            </ModalStyled>
        </div>
    );
};

export default ModalAddNewNotice;
