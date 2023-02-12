import PetsList from 'components/Pets/PetsList/PetsList';


import { PetsWrapper, PetsTitle} from './PetsDataStyled';

const PetsData = function () {
    return (
        <PetsWrapper>
            <PetsTitle>My pets:</PetsTitle>
            <PetsList />
        </PetsWrapper>
    );
};

export default PetsData;
