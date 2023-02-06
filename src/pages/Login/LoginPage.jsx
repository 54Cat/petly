import { MainContainer } from 'components/Utils/Styles/ContainterAllStyled';
import React from 'react';
import { Container } from '../../components/Utils/Styles/Container-auth-login/ContainerAuth';

import { AuthLogin } from './authLogin';

export const LoginPage = () => {
    return (
        <>
            <Container>
                <MainContainer>
                    <AuthLogin />
                </MainContainer>
            </Container>
        </>
    );
};
