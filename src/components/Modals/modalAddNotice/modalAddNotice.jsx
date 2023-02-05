import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { register } from 'redux/operations';
import {
  AddNoticeWrapper,
  
  AddNoticeTitle,
  Text,
  AddNoticeForm,
  FormInput,
  FormLabel,
  SubmitBtn,
} from './modalAddNoticeStyled';
import { Button } from '@mui/material';


export const modalAddNotice = () => {
  
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); 
  const [namePet, setNamePet] = useState('');
  const [birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');

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
    dispatch(register({ title, namePet, birth, breed }));      
      setTitle('');
      setNamePet('');
      setBirth('');
      setBreed('');
      // должна очищаться и открывать следующую форму
  };

  const titleInputId = useMemo(()=> nanoid(), []);
  const namePetInputId = useMemo(()=> nanoid(), []);
  const birthPetInputId = useMemo(()=> nanoid(), []);
  const breedInputId = useMemo(()=> nanoid(), []);

  return (
    <AddNoticeWrapper>
          <AddNoticeTitle>Add pet</AddNoticeTitle>
          <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</Text>
          <Button type="submit">lost/found</Button>
          <Button type="submit">In good hands</Button>
          <Button type="submit">sell</Button>

      <AddNoticeForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="titleInputId">Tittle of ad*</FormLabel>
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

        <FormLabel htmlFor="birthPetInputId">Date of birth</FormLabel>
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
        <SubmitBtn type="submit">Cancel</SubmitBtn>
        <SubmitBtn type="submit">Next</SubmitBtn>
      </AddNoticeForm>
    </AddNoticeWrapper>
  );
};
