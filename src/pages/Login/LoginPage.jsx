import { MainContainer } from 'components/Utils/Styles/ContainterAllStyled';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from '../../components/Utils/Styles/Container-auth-login/ContainerAuth';

import { AuthLogin } from './authLogin';

const LoginPage = () => {
    return (
        <>
            <Container>
                <MainContainer>
                    <AuthLogin />
                </MainContainer>
                <ToastContainer />
            </Container>
        </>
    );
};

export default LoginPage;