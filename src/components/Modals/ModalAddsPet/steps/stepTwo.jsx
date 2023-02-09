import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {TitleItemTwo, BtnAddFileIcon, ErrorText, AddFile, ButtonCloseModal, ButtonCloseIcon, ModalItemTwo, FlexBox, FormStyled, TitleTwo, FieldPhoto, StyledLabel, FieldTextarea, NextBtn, CancelBtn } from '../AddsPetForm/AddsPetModalStyled';


//import AddIcon from '@mui/icons-material/Add';


const validationSchema = yup.object({
    comments: yup.string().min(8).max(120).required(),
})

const StepTwo = ({ data, prev, onClose }) => {

    const FormError = ({ name }) => {
        return (
            <ErrorMessage
                name={name}
                render={message => <ErrorText>{message}</ErrorText>}
            />
    )
    }
    
    const handleSubmit = (values, { resetForm }) => {
        //addMyPet(values);
        console.log(values)
        resetForm();
        onClose();
    }
    
    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({values}) => (
                <ModalItemTwo>
                    <ButtonCloseModal type='button' onClick={() => onClose()}>
                    <ButtonCloseIcon />
                </ButtonCloseModal>
                    <FormStyled>
                        <TitleTwo>Add pet</TitleTwo>
                        <TitleItemTwo>Add photo and some comments</TitleItemTwo>
                        
                        <AddFile htmlFor="myPetsPhoto">
                            <BtnAddFileIcon />
                            <FieldPhoto id="myPetsPhoto" type="file" name="myPetsPhoto" />
                            <FormError name="myPetsPhoto" />
                        </AddFile>
                        
                        <div>
                            <StyledLabel htmlFor='comments'> 
                                Comments
                                    <FieldTextarea type="text" name="comments" placeholder="Type comments" as="textarea"/>
                                    <FormError name="comments" />
                            </StyledLabel>
                        </div>
                        <FlexBox>
                        <NextBtn type="submit">Done</NextBtn>
                            <CancelBtn type="button" onClick={() => prev(values)}>Back</CancelBtn>
                        </FlexBox>
                    </FormStyled>
                </ModalItemTwo>    
            )}
        </Formik>
    )
}
export default StepTwo