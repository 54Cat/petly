import { BtnBox, TextBtn, BtnAddPet } from './BtnAddsPetStyled';
import AddsPetForm from 'components/Modals/ModalAddsPet/AddsPetForm/AddsPetForm';

import Modal from 'components/Modals/ModalAddsPet/AddsPetForm/Modal';
import { useState } from 'react';

const ButtonAddsPet = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <BtnBox>
                <TextBtn>Add pet</TextBtn>
                <BtnAddPet type="button" onClick={openModal}>
                    +
                </BtnAddPet>
            </BtnBox>
            {modalOpen && (
                <Modal onClose={closeModal}>
                    <AddsPetForm onClose={closeModal}></AddsPetForm>
                </Modal>
            )}
        </>
    );
};
export default ButtonAddsPet;
