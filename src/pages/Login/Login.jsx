import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';

import { Link } from 'react-router-dom';
import {
    DivForm,
    Input,
    Title,
    Button,
    Text,
    FormError,
} from './authLogin.module';

export const Login = props => {
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
            // validationSchema={}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {() => (
                <DivForm>
                    <Title>Login</Title>
                    <Form>
                        <Input name="email" placeholder="Email" />
                        <FormErrors name="email" />

                        <Input name="password" placeholder="Password" />
                        <FormErrors name="password" />

                        {/* <Input name="confirm" placeholder="Confirm password" />
                        <FormErrors name="confirm" /> */}

                        <Button type="submit">Login</Button>
                    </Form>

                    <Text>
                        Already have an account?
                        <Link to={'/register'}>Register</Link>
                    </Text>
                </DivForm>
            )}
        </Formik>
    );
};
