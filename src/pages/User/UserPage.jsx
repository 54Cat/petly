import UserData from 'components/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import { Container, ButtonContainer } from './UserPageStyled';
import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

const UserPage = () => {

    return (
        <Container>
            <ButtonContainer><ButtonAddsPet /></ButtonContainer>
            <UserData />
            <PetsData />   
        </Container>
    );
};

export default UserPage;
