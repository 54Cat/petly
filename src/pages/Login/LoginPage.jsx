import React from 'react';
import { MainContainer } from 'components/Utils/Styles/ContainterAllStyled';
import { Container } from '../../components/Utils/Styles/Container-auth-login/ContainerAuth';
import { AuthLogin } from './authLogin';

const LoginPage = () => {
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

export default LoginPage;
