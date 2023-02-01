import * as yup from 'yup';
export const stepOneValidationSchema = yup.object().shape({
    email: yup
        .string()
        .typeError()
        .min(10, 'Минимум 10 символов')
        .max(63)
        .required('Обьязательное поле')
        .email('Не правильно!'),
    password: yup.string().required().min(7, 'Минимум 7 символов').max(32),
    // confirm: yup
    //     .string()

    //     .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
// const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const stepTwoValidationSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup
        .string()
        .typeError("That doesn't look like a phone number")
        .min(8)
        .required('+3800000 is valid'),
    city: yup.string().required().min(2, 'Минимум 7 символов').max(32),
});
