import * as yup from 'yup';
const emailRegExp = /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-z]{2,10})+)$/;
export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .matches(emailRegExp, 'Invalid Email')
        .matches()
        .typeError()
        .min(10)
        .max(63)
        .required('Required field')
        .email('not valid Email'),
    password: yup.string().required().min(7, 'Minimum 7 characters').max(32),
});
