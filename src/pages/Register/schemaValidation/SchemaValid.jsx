import * as yup from 'yup';
const emailRegExp = /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-z]{2,10})+)$/;

const PassRegExp =
    /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;
export const stepOneValidationSchema = yup.object().shape({
    email: yup
        .string()
        .matches(emailRegExp, 'Invalid Email')
        .matches()
        .typeError()
        .min(10)
        .max(63)
        .required('Required field')
        .email('not valid Email'),
    password: yup
        .string()
        .matches(PassRegExp, 'Example password :Aa12')
        .matches(/^[^ ]{7,32}$/, 'The password not contain a space')
        .required('Required field')
        .min(7, 'Minimum 7 characters')
        .max(32, 'Maximum 32 characters')
        .trim('Spaces not available'),

    confirm: yup
        .string()
        .required('Confirm password is required field')
        .oneOf([yup.ref('password'), null], 'Different passwords'),
});
const phoneRegExp = /^\+380\d{9}$/;
const cityRegExp = /[A-Z][a-z]+, [A-Z][a-z]*/;
export const stepTwoValidationSchema = yup.object().shape({
    name: yup.string().required('Required field'),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Example: +38012345789')
        .typeError("That doesn't look like a phone number")
        .min(8)
        .required('A phone number is required'),
    city: yup
        .string()
        .required()
        .min(2, 'Minimum 2 characters')
        .max(32)
        .matches(cityRegExp, 'Example:Odesa, Odeska'),
});
