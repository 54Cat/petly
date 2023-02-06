import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Title } from '../AddsPetForm/AddsPetModalStyled';
import { ErrorText } from '../AddsPetForm/AddsPetModalStyled';

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
        console.log(values);
        resetForm()       
    }
    
    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({values}) => (
                <div>
                    <Title>Add pet</Title>
                    <Form>
                        <h4>Add photo and some comments</h4>
                        <div>
                            <Field type="file" name="myPetsPhoto" placeholder="+" />
                            <FormError name="myPetsPhoto" />
                        </div>
                        
                        <div>
                            <label htmlFor='comments'>
                                Comments
                                <div>
                                    <Field type="text" name="comments" placeholder="Type comments" />
                                    <FormError name="comments" />
                                </div>
                            </label>
                        </div>
                        <button type="submit">Done</button>
                        <button type="button" onClick={() => 
                            prev(values)
                            }>Back</button>
                    </Form>
                </div>    
            )}
        </Formik>
    )
}
export default StepTwo