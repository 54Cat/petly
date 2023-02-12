import PetsList from 'components/PetsList/PetsList';


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
