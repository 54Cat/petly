import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Title, ErrorText, FlexBox } from '../AddsPetForm/AddsPetModalStyled';
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
      
return (
    <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        {() => (
          <div>
            <Title>Add pet</Title>
            <Form>
            <div>
                <label htmlFor='name'>
                Name pet
                    <div>
                        <Field type="text" name="name" placeholder="Type name pet" />
                        <FormError name="name" />
                    </div>
                </label>
            </div>

            <div>
                <label htmlFor='birthday'>
                Date of birth
                    <div>
                        <Field type="text" name="birthday" placeholder="Type date of birth" />
                        <FormError name="birthday" />
                    </div>
                </label>
            </div>

            <div>
                <label htmlFor='breed'>
                Breed
                    <div>
                        <Field type="text" name="breed" placeholder="Type breed" />
                        <FormError name="breed" />
                    </div>
                </label>
            </div>

            <FlexBox>
                <button type="button">Cancel</button>
                <button type="submit">Next</button>
            </FlexBox>
           
        </Form>
        </div>  
    )}                
    </Formik>
    )
}
export default StepOne