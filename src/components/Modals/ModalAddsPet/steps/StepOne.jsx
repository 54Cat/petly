import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Input, FormDiv, FormsAdds, FlexBox } from '../AddsPetForm/AddsPetModalStyled';
const StepOne = () => {
    
    
return (
    <Formik>
         {() => (
            <FormDiv>
                <Title>Add pet</Title>
                <Form>
                    <label>
                        Name pet
                        <Input type="text" name="name" placeholder="Type name pet"/>
                    </label>
                    
                    <label>
                        Date of birth
                        <Input type="text" name="date of birth" placeholder="Type date of birth"/>
                    </label>

                    <label>
                        Breed
                        <Input type="text" name="breed" placeholder="Type breed"/>
                    </label>

                    <FlexBox>
                        <button type="button">Cancel</button>
                        <button type="submit">Next</button>
                    </FlexBox>
                </Form>

                    {/* <Text>
                        Already have an account?
                        <NavLink to={'/login'}>Login</NavLink>
                    </Text> */}
                </FormDiv>
        )}
    </Formik>
    )
}
export default StepOne