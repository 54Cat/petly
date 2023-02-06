import React from 'react';
import { Container } from '../../components/Utils/Styles/Container-auth-login/ContainerAuth';

import { AuthLogin } from './authLogin';

export const LoginPage = () => {
    return (
        <>
            <Container>
                <AuthLogin />
            </Container>
        </>
    );
};
