import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

import {
    AddNoticeWrapper,
    CloseBtn,
    AddNoticeTitle,
    Text,
    AddNoticeForm,
    FormInput,
    FormLabel,
    SubmitBtn,
} from './modalAddNoticeStyled';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const customStyles = {
  content: {
        width: '608px',
        height: '885px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -30%)',
    },
};

export const ModalAddNotice = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [namePet, setNamePet] = useState('');
    const [birth, setBirth] = useState('');
    const [breed, setBreed] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);

    Modal.setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }

    const handleChange = e => {
        const title = e.target.title;
        const value = e.target.value;
        switch (title) {
            case 'inputTitle':
                setTitle(value);
                break;

            case 'inputNamePet':
                setNamePet(value);
                break;

            case 'inputBirth':
                setBirth(value);
                break;

            case 'inputBreed':
                setBreed(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ title, namePet, birth, breed });
        setTitle('');
        setNamePet('');
        setBirth('');
        setBreed('');
        // должна очищаться и открывать следующую форму
    };

    const titleInputId = useMemo(() => nanoid(), []);
    const namePetInputId = useMemo(() => nanoid(), []);
    const birthPetInputId = useMemo(() => nanoid(), []);
    const breedInputId = useMemo(() => nanoid(), []);

    return (
        <>
            <div onClick={openModal} id="button">
                <AddCircleIcon />
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Modal add notice"
                style={customStyles}
            >
                <AddNoticeWrapper>
                    <CloseBtn
                        type="submit"
                        onClick={closeModal}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </CloseBtn>
                    {/* <CloseBtn type="submit" ><CloseIcon  sx={{ fontSize: 20 }} /></CloseBtn> */}
                    <AddNoticeTitle>Add pet</AddNoticeTitle>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                        dolor sit amet, consectetur
                    </Text>
                    <Button type="submit">lost/found</Button>
                    <Button type="submit">In good hands</Button>
                    <Button type="submit">sell</Button>

                    <AddNoticeForm onSubmit={handleSubmit}>
                        <FormLabel htmlFor="titleInputId">
                            Tittle of ad*
                        </FormLabel>
                        <FormInput
                            type="text"
                            name="inputTitle"
                            placeholder="Type name"
                            value={title}
                            onChange={handleChange}
                            id={titleInputId}
              />
              <FormLabel htmlFor="namePetInputId">Name pet</FormLabel>
                        <FormInput
                            type="text"
                            name="inputNamePet"
                            placeholder="Type name pet"
                            value={namePet}
                            onChange={handleChange}
                            id={namePetInputId}
                        />

                        <FormLabel htmlFor="birthPetInputId">
                            Date of birth
                        </FormLabel>
                        <FormInput
                            type="data"
                            name="inputBirth"
                            placeholder="Type date of birth"
                            value={birth}
                            onChange={handleChange}
                            id={birthPetInputId}
                        />

                        <FormLabel htmlFor="breedInputId">Breed</FormLabel>
                        <FormInput
                            type="text"
                            name="inputBreed"
                            placeholder="Type breed"
                            value={breed}
                            onChange={handleChange}
                            id={breedInputId}
                        />
                        <SubmitBtn onClick={closeModal} type="submit">
                            Cancel
                        </SubmitBtn>
                        <SubmitBtn type="submit">Next</SubmitBtn>
                    </AddNoticeForm>
                </AddNoticeWrapper>
            </Modal>
        </>
    );
};

