// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';

const UserPage = () => {
    const dispatch = useDispatch();

    dispatch(getUserOperation());

    // useEffect(() => {
    //     console.log('useEffect start us');
    //     dispatch(getUserOperation());
    // }, [dispatch]);
    return (
        <Container>
            <UserData />
            <PetsData />
        </Container>
    );
};

export default UserPage;
