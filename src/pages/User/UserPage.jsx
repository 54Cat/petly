import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/User/userOperations';

import UserData from '../../components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { ErrorMessage } from './UserPage.styled';
import { getLoader, getError } from 'redux/User/selectors';

import { Loader } from 'components/Utils/Loader/Loader';

const UserPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoader);
    const error = useSelector(getError);

    dispatch(fetchUser());

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage> Please try again later :( </ErrorMessage>
            ) : (
                <>
                    <UserData />
                    <PetsData />
                </>
            )}
        </>
    );
};

export default UserPage;
