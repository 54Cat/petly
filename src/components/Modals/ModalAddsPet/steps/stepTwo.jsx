import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

import {
    TitleItemTwo,
    BtnAddFileIcon,
    ErrorText,
    AddFile,
    ButtonCloseModal,
    ButtonCloseIcon,
    ModalItemTwo,
    FlexBox,
    FormStyled,
    TitleTwo,
    FieldPhoto,
    StyledLabel,
    FieldTextarea,
    NextBtn,
    CancelBtn,
} from '../AddsPetForm/AddsPetModalStyled';
import { useDispatch } from 'react-redux';
import { addPetOperation } from 'redux/Pets/petsOperations';

//import AddIcon from '@mui/icons-material/Add';

const validationSchema = yup.object({
    comments: yup.string().min(8).max(120).required(),
});


const StepTwo = ({ data, prev, onClose }) => {
    
    const FormError = ({ name }) => {
        return (
            <ErrorMessage
                name={name}
                render={message => <ErrorText>{message}</ErrorText>}
            />

    )
    }
    const dispatch = useDispatch();
    
     const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [birthday, setbirthday] = useState('');
    const [breed, setBreed] = useState('');
    const [comments, setComments] = useState('');
    const handleChange = (event) => {
       console.log(event.target.files);
       setFile(event.target.files[0]);
    }
     
    const getPetFormData = () => {
       
    const data = new FormData();
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('breed', breed);
    data.append('comments', comments);
    data.append('myPetsPhoto', file);
    return data;
  };


    const handleSubmit = (values, { resetForm }) => {
        setName(values.name);
        setbirthday(values.birthday);
        setBreed(values.breed);
        setComments(values.comments);
        const finalData = getPetFormData();
        console.log(finalData);
        dispatch(addPetOperation(finalData))
        
        console.log(values)
        resetForm();
        onClose();    
    }



    return (
        <Formik
            //enctype="multipart/form-data"
            initialValues={data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ values }) => (
                <ModalItemTwo>
                    <ButtonCloseModal type="button" onClick={() => onClose()}>
                        <ButtonCloseIcon />
                    </ButtonCloseModal>
                    <FormStyled>
                        <TitleTwo>Add pet</TitleTwo>
                        <TitleItemTwo>Add photo and some comments</TitleItemTwo>

                        <AddFile htmlFor="myPetsPhoto">
                            <BtnAddFileIcon />

                            <FieldPhoto id="myPetsPhoto" type="file" name="myPetsPhoto" onChange={ handleChange} />

                            <FormError name="myPetsPhoto" />
                        </AddFile>

                        <div>
                            <StyledLabel htmlFor="comments">
                                Comments
                                <FieldTextarea
                                    type="text"
                                    name="comments"
                                    placeholder="Type comments"
                                    as="textarea"
                                />
                                <FormError name="comments" />
                            </StyledLabel>
                        </div>
                        <FlexBox>
                            <NextBtn type="submit">Done</NextBtn>
                            <CancelBtn
                                type="button"
                                onClick={() => prev(values)}
                            >
                                Back
                            </CancelBtn>
                        </FlexBox>
                    </FormStyled>
                </ModalItemTwo>
            )}
        </Formik>
    );
};

      export default StepTwo
