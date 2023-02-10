import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from './UserPage.styled';

const UserPage = () => {

    return (
        <Container>
            <UserData />
            <PetsData />
        </Container>
    );
};

export default UserPage;
