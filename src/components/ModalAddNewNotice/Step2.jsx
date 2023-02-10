import React from 'react';
import { useDispatch } from 'react-redux';
import { addNoticeOperation } from 'redux/Notices/noticesOperations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    comments: yup.string().min(8).max(120).required(),
});

const Step2 = ({ data, prev }) => {
    const FormError = ({ name }) => {
        return (
            <ErrorMessage name={name} render={message => <p>{message}</p>} />
        );
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        //addMyPet(values);
        console.log(values);
        dispatch(addNoticeOperation(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ values }) => (
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

                    <label htmlFor="myPetsPhoto">
                        <Field
                            id="myPetsPhoto"
                            type="file"
                            name="myPetsPhoto"
                        />
                        <FormError name="myPetsPhoto" />
                    </label>

                    <div>
                        <label htmlFor="comments">
                            Comments
                            <Field
                                type="text"
                                name="comments"
                                placeholder="Type comments"
                                as="textarea"
                            />
                            <FormError name="comments" />
                        </label>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
export default Step2;

// const dispatch = useDispatch();

// const entries = Object.entries(data).filter(entry => entry[0] !== 'files');

// const handleClick = () => {
//     prev();
// };

// const onSubmit = async () => {
//     const formData = new FormData();
//     if (data.files) {
//         data.files.forEach(file => {
//             formData.append('files', file, file.name);
//         });
//     }

//     entries.forEach(entry => {
//         formData.append(entry[0], entry[1]);
//     });

//     dispatch(addNoticeOperation(formData));
// };
