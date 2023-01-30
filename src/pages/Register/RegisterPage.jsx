import React from 'react';

import {
    BgPhoto,
    Container,
} from '../../components/Utils/Styles/Container-auth-login/ContainerAuth';
import { AuthForm } from './authForm/authForm';
export const RegisterPage = () => {
    return (
        <>
            <Container>
                <BgPhoto />
                <AuthForm />
            </Container>
        </>
    );
};
