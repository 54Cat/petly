import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getUserOperation } from 'redux/User/userOperations';
import { fetchUser } from '../../redux/User/userOperations';

import UserData from '../../components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';
import { getLoader } from 'redux/User/selectors';
import { Loader } from 'components/Utils/Loader/Loader';

const UserPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoader);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <Container>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <UserData />
                    <PetsData />
                </>
            )}
        </Container>
    );
};

export default UserPage;
