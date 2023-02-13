import { useState } from 'react';
import ModalContent from './formAddNotice';

import {
    ModalStyled,
    CloseBtn,
    StyledIcon,
    OpenBtn,
    WrapAddPet,
} from './ModalAddNewNoticeStyled';
import { getAuth } from "../../../redux/selectors";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector } from "react-redux";


const ModalAddNewNotice = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { isLoggedIn } = useSelector(getAuth);


    function openModal() {
        isLoggedIn
            ? setIsOpen(true)
            : Notify.failure('Oops... please login or register');
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
                ariaHideApp={false}
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
