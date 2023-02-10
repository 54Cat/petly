import React from 'react';

import * as yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = yup.object({
    name: yup.string().min(2).max(16).required(),
    birthday: yup.string().required(),
    breed: yup.string().min(2).max(16).required(),
});

const Step1 = props => {
    const FormError = ({ name }) => {
        return (
            <ErrorMessage name={name} render={message => <p>{message}</p>} />
        );
    };

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
                <Form>
                    <h1>Add pet</h1>
                    <label htmlFor="title">
                        <Field
                            type="text"
                            name="title"
                            placeholder="Type name pet"
                        />
                        <FormError name="birthday" />
                    </label>

                    <label htmlFor="name">
                        <Field
                            type="text"
                            name="name"
                            placeholder="Type name pet"
                        />
                        <FormError name="birthday" />
                    </label>

                    <label htmlFor="birthday">
                        <Field
                            type="text"
                            name="birthday"
                            placeholder="Type name pet"
                        />
                        <FormError name="birthday" />
                    </label>

                    <label htmlFor="breed">
                        <Field
                            type="text"
                            name="breed"
                            placeholder="Type name pet"
                        />
                        <FormError name="birthday" />
                    </label>
                </Form>
            )}
        </Formik>
    );
};
export default Step1;
