import { useDispatch } from 'react-redux';
import { getUserOperation } from 'redux/User/userOperations';

import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';

import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet'


const UserPage = () => {
    const dispatch = useDispatch();

    dispatch(getUserOperation());

    // useEffect(() => {
    //     console.log('useEffect start us');
    //     dispatch(getUserOperation());
    // }, [dispatch]);


    
    return (
        <Container>
            <ButtonAddsPet />
            <UserData />
            <PetsData />
        </Container>
    );
};

export default UserPage;
