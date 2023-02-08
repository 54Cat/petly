import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from '../../components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { ErrorMessage } from './UserPage.styled';
import { getLoader, getError } from 'redux/User/selectors';

import { Loader } from 'components/Utils/Loader/Loader';

import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

const UserPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoader);
    const error = useSelector(getError);
    dispatch(fetchUser());
    // useEffect(() => {
    //     dispatch(fetchUser());
    // }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage> Please try again later :( </ErrorMessage>
            ) : (
                <>
                    <ButtonAddsPet />
                    <UserData />
                    <PetsData />
                </>
            )}
        </>

        // <Container>
        //     <ButtonAddsPet />
        //     <UserData />
        //     <PetsData />
        // </Container>
    );
};

export default UserPage;
