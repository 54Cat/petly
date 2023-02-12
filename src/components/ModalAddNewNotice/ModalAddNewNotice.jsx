import { useState } from 'react';
import ModalContent from './formAddNotice';

import {
    ModalStyled,
    CloseBtn,
    StyledIcon,
    OpenBtn,
} from './ModalAddNewNoticeStyled';

const ModalAddNewNotice = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
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
                ariaHideApp={false}
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

                <ModalContent Close={closeModal}></ModalContent>
            </ModalStyled>
        </div>
    );
};

export default ModalAddNewNotice;
