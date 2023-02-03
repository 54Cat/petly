import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import { stepTwoValidationSchema } from '../schemaValidation/SchemaValid';
import { Link } from 'react-router-dom';
import {
    Input,
    Title,
    Text,
    FormError,
    Button1,
    DivFormTwo,
    ButtonTwoReg,
} from '../authForm/authForm.module';
import { registerUser } from '../../../redux/Auth/AuthSlice';
import { useDispatch } from 'react-redux';

export const StepTwo = ({ data, prev }) => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        try {
            dispatch(registerUser(values));
            resetForm();
        } catch (error) {
            console.log(error);
        }

        // console.log(data);
        // console.log(values);
    };
    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <DivFormTwo>
                    <Title>Registration</Title>
                    <Form>
                        <Input name="name" placeholder="Name" />
                        <FormErrors name="name" />
                        <Input name="phone" placeholder="Mobile phone" />
                        <FormErrors name="phone" />
                        <Input name="city" placeholder="City,region " />
                        <FormErrors name="city" />
                        <ButtonTwoReg type="submit">Register</ButtonTwoReg>
                        <Button1 type="button" onClick={() => prev(values)}>
                            Back
                        </Button1>
                    </Form>
                    <Text>
                        Already have an account?
                        <Link to={'/login'}>Login</Link>
                    </Text>
                </DivFormTwo>
            )}
        </Formik>
    );
};
export const FormErrors = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <FormError>{message}</FormError>}
        />
    );
};
