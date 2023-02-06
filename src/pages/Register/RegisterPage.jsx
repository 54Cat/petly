import React from 'react';
import { MainContainer } from 'components/Utils/Styles/ContainterAllStyled';
import { Container } from '../../components/Utils/Styles/Container-auth-login/ContainerAuth';
import { AuthForm } from './authForm/authForm';

const RegisterPage = () => {
    return (
        <>
            <Container>
                <MainContainer>
                    <AuthForm />
                </MainContainer>
            </Container>
        </>
    );
};

export default RegisterPage;