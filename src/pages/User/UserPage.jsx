import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import Logout from 'components/Logout/Logout';
import { Container } from './UserPage.styled';

export const UserPage = () => {
    return (
        <Container>
            <UserData />
            <Logout />
            <PetsData />
        </Container>
    );
};
