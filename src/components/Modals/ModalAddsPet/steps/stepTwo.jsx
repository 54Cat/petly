import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Title, ModalItemTwo, FlexBox, FormStyled, TitleTwo, FieldPhoto, StyledLabel, FieldTextarea, NextBtn, CancelBtn } from '../AddsPetForm/AddsPetModalStyled';
import { ErrorText } from '../AddsPetForm/AddsPetModalStyled';

//import AddIcon from '@mui/icons-material/Add';


const validationSchema = yup.object({
    comments: yup.string().min(8).max(120).required(),
})

const StepTwo = ({ data, prev }) => {

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
        resetForm()       
    }
    
    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({values}) => (
                <ModalItemTwo>    
                    <FormStyled>
                        <Title>Add pet</Title>
                        <TitleTwo>Add photo and some comments</TitleTwo>
                        <div>
                            <FieldPhoto type="file" name="myPetsPhoto" />
                            <FormError name="myPetsPhoto" />
                        </div>
                        
                        <div>
                            <StyledLabel htmlFor='comments'>
                                Comments
                                
                                    <FieldTextarea type="text" name="comments" placeholder="Type comments" />
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