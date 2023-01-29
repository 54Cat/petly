import { Formik, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import {
    stepOneValidationSchema,
    stepTwoValidationSchema,
} from '../schemaValidation/SchemaValid';
import { Link } from 'react-router-dom';
import {
    DivForm,
    Input,
    Title,
    Button,
    Text,
    FormError,
    Button1,
    DivFormTwo,
    ButtonTwoReg,
} from './authForm.module';

const FormErrors = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <FormError>{message}</FormError>}
        />
    );
};

export const AuthForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirm: '',
        phone: '',
        city: '',
    });
    const [currentStep, setCurrentStep] = useState(0);
    const makeRequest = formData => {};
    const handleNextStep = (newData, final = false) => {
        setData(prev => ({ ...prev, ...newData }));
        if (final) {
            makeRequest(newData);
            return;
        }
        setCurrentStep(prev => prev + 1);
    };
    const handlePrevStep = newData => {
        setData(prev => ({ ...prev, ...newData }));
        setCurrentStep(prev => prev - 1);
    };
    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];

    return <div>{steps[currentStep]}</div>;
};

const StepOne = props => {
    const handleSubmit = values => {
        props.next(values);
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
const StepTwo = props => {
    const handleSubmit = (values, { resetForm }) => {
        props.next(values, true);
        resetForm();
    };
    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={props.data}
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
                        <Button1
                            type="button"
                            onClick={() => props.prev(values)}
                        >
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
