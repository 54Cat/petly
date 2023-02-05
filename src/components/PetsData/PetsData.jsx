import PetsList from 'components/PetsList/PetsList';
import { PetsWrapper, PetsTitle } from './PetsData.styled';

const PetsData = function () {
    return (
        <PetsWrapper>
            <PetsTitle>My pets:</PetsTitle>
            <PetsList />
        </PetsWrapper>
    );
};

export default PetsData;
