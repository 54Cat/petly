import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { useEffect } from 'react';
import { Container } from './UserPage.styled';

import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

const UserPage = () => {
    const dispatch = useDispatch();

    // dispatch(getUserOperation());
    useEffect(() => {
        dispatch(getUserOperation());
    }, [dispatch]);

    return (
        <Container>
            <UserData />
            <ButtonAddsPet />
            <PetsData />
        </Container>
    );
};

export default UserPage;
