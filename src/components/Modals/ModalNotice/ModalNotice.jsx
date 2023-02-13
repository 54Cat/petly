import { useState } from 'react';
import {
    ModalNoticeStyled,
    CloseBtn,
    StyledIcon,
    OpenBtn,
} from './ModalNotice.styled';
import NoticeContent from './ModalNoticeContent';

const ModalNotice = ({id}) => {
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
            <ModalNoticeStyled
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
                <NoticeContent id={id}></NoticeContent>
            </ModalNoticeStyled>
        </div>
    );
};

export default ModalNotice;
