import { Formik, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/Login/LoginSlice';
import { loginValidationSchema } from '../Login/schemaValidation/SchemaValid';

import {
    DivForm,
    Input,
    Title,
    Button,
    Text,
    FormError,
    Link,
} from './authLoginStyled';

export const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const handleSubmit = (data, { resetForm }) => {
        try {
            dispatch(loginUser(data));
            setData('');
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };
    const FormErrors = ({ name }) => {
        return (
            <ErrorMessage
                name={name}
                render={message => <FormError>{message}</FormError>}
            />
        );
    };

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={data}
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
