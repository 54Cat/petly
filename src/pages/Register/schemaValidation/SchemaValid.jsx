import * as yup from 'yup';
export const stepOneValidationSchema = yup.object().shape({
    email: yup
        .string()

        .typeError()
        .min(10, '')
        .max(63)
        .required('Required field')
        .email('not valid Email'),
    password: yup
        .string()
        .required()
        .min(7, 'Minimum 7 characters')
        .max(32)
        .trim('Spaces not available'),

    // confirm: yup
    //     .string()

    //     .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const stepTwoValidationSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup
        .string()
        .matches(phoneRegExp)
        .typeError("That doesn't look like a phone number")
        .min(8)
        .required('A phone number is required'),
    city: yup.string().required().min(2, 'Минимум 7 символов').max(32),
});
