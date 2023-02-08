// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';
import ModalNotice from 'components/ModalNotice/ModalNotice';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';

const UserPage = () => {
    const dispatch = useDispatch();

    dispatch(getUserOperation());

    return (
        <Container>
            <ModalNotice />
            <UserData />
            <PetsData />
        </Container>
    );
};

export default UserPage;
