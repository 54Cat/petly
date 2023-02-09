import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';

<<<<<<< HEAD
// import { Container } from './UserPage.styled';

import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

=======
>>>>>>> main
const UserPage = () => {
    const dispatch = useDispatch();

    dispatch(getUserOperation());

<<<<<<< HEAD
    return (
        <>
=======
    // useEffect(() => {
    //     console.log('useEffect start us');
    //     dispatch(getUserOperation());
    // }, [dispatch]);

    return (
        <Container>
>>>>>>> main
            <UserData />
            <ButtonAddsPet />
            <PetsData />
        </>
    );
};

export default UserPage;
