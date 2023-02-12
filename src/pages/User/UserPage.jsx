import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserOperation } from 'redux/User/userOperations';
import { isLoading } from 'redux/Auth/AuthSelectors'

import UserData from 'components/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import { Container, ButtonContainer } from './UserPageStyled';
import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

const UserPage = () => {    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOperation());
    }, [dispatch]);

    const isLogIn = useSelector(isLoading);

    return (
        !isLogIn && (
            <>
                <Container>
                    <ButtonContainer>
                        <ButtonAddsPet />
                    </ButtonContainer>
                    <UserData />
                    <PetsData />
                </Container>
            </>
        )
    );
};

export default UserPage;
