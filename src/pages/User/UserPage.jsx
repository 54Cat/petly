import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';

const UserPage = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUserOperation());
    // }, [dispatch]);
    dispatch(getUserOperation());

    return (
        <Container>
            <UserData />
            <PetsData />
        </Container>
    );
};

export default UserPage;
