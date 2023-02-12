import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container, ButtonContainer } from './UserPageStyled';
import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

const UserPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOperation());
    }, [dispatch]);

    return (
        <>
            <Container>
                <ButtonContainer>
                    <ButtonAddsPet />
                </ButtonContainer>
                <UserData />
                <PetsData />
            </Container>
        </>
    );
};

export default UserPage;
