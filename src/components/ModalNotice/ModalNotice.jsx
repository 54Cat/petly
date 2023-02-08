import { useState } from 'react';
import { ModalNoticeStyled } from './ModalNotice.styled';
import NoticeContent from './ModalNoticeContent';

const ModalNotice = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <ModalNoticeStyled
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <NoticeContent></NoticeContent>
            </ModalNoticeStyled>
        </div>
    );
};

export default ModalNotice;
