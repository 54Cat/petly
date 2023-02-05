import * as yup from 'yup';
export const loginValidationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(7, 'Минимум 7 символов').max(32),
});
