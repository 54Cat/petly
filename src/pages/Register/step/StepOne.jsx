import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import { stepOneValidationSchema } from '../schemaValidation/SchemaValid';
import { Link } from 'react-router-dom';
import {
    DivForm,
    Input,
    Title,
    Button,
    Text,
    FormError,
} from '../authForm/authForm.module';

export const StepOne = props => {
    const FormErrors = ({ name }) => {
        return (
            <ErrorMessage
                name={name}
                render={message => <FormError>{message}</FormError>}
            />
        );
    };

    const handleSubmit = data => {
        props.next(data);

        console.log(props);
    };
    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {() => (
                <DivForm>
                    <Title>Registration</Title>
                    <Form>
                        <Input name="email" placeholder="Email" />
                        <FormErrors name="email" />

                        <Input name="password" placeholder="Password" />
                        <FormErrors name="password" />

                        <Input name="confirm" placeholder="Confirm password" />
                        <FormErrors name="confirm" />

                        <Button type="submit">Next</Button>
                    </Form>

                    <Text>
                        Already have an account?
                        <Link to={'/login'}>Login</Link>
                    </Text>
                </DivForm>
            )}
        </Formik>
    );
};
