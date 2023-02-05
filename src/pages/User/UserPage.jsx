import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import Logout from 'components/Logout/Logout';
import { Container } from './UserPage.styled';

export const UserPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOperation());
    }, [dispatch]);
    return (
        <Container>
            <UserData />
            <Logout />
            <PetsData />
        </Container>
    );
};
