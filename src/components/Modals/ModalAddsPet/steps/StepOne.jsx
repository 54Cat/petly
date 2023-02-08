import { Formik, ErrorMessage } from 'formik';
import { ButtonCloseModal, ButtonCloseIcon, Title, ErrorText, ModalItem, FlexBox, StyledLabel, FormStyled, FieldStyled, CancelBtn, NextBtn, LabelBox } from '../AddsPetForm/AddsPetModalStyled';
import * as yup from 'yup';


// const initialValues = {
//     name: "",
//     birthday: "",
//     breed: "",        
// }

const validationSchema = yup.object({
    name: yup.string().min(2).max(16).required(),
    birthday: yup.string().required(),
    breed: yup.string().min(2).max(16).required(),
})

const StepOne = (props) => {
   
 const FormError = ({ name }) => {
        return (
            <ErrorMessage
                name={name}
                render={message => <ErrorText>{message}</ErrorText>}
            />
    )
    }
    
    const handleSubmit = data => {
        props.next(data);
        console.log(props);
    };
    
    const { onClose } = props; 
    return (
    
    <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        {() => (
            <ModalItem>
                <ButtonCloseModal type='button' onClick={() => onClose()}>
                    <ButtonCloseIcon />
                </ButtonCloseModal>
            <FormStyled>
             <Title>Add pet</Title>       
            <LabelBox>
                <StyledLabel htmlFor='name'>
                Name pet 
                    <FieldStyled type="text" name="name" placeholder="Type name pet" /> 
                    <FormError name="name" />
                </StyledLabel>
            </LabelBox>

            <LabelBox>
                <StyledLabel htmlFor='birthday'>
                Date of birth
                    <FieldStyled type="text" name="birthday" placeholder="Type date of birth" />
                    <FormError name="birthday" />
                </StyledLabel>
            </LabelBox>

            <div>
                <StyledLabel htmlFor='breed'>
                Breed    
                    <FieldStyled type="text" name="breed" placeholder="Type breed" />
                    <FormError name="breed" />
                </StyledLabel>
            </div>

            <FlexBox>
                <NextBtn type="submit">Next</NextBtn>
                <CancelBtn type="button" onClick={() => onClose()} >Cancel</CancelBtn>
            </FlexBox>  
                </FormStyled>
                </ModalItem> 
    )}
               
    </Formik>
    )
}
export default StepOne