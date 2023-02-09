import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';
// import { useEffect } from 'react';

const UserPage = () => {
    const dispatch = useDispatch();

    dispatch(getUserOperation());

    // useEffect(() => {
	// 	dispatch(getUserOperation());
    // }, [dispatch]);

    return (
        <Container>
            <UserData />
            <PetsData />
        </Container>
    );
};

export default UserPage;
