import PetsList from 'components/PetsList/PetsList';
import ButtonAddsPet from 'components/ButtonAddsPet/ButtonAddsPet';

import { PetsWrapper, PetsTitle, InfoWrapper } from './PetsData.styled';

const PetsData = function () {
    return (
        <PetsWrapper>
            <InfoWrapper>
                <ButtonAddsPet></ButtonAddsPet>
                <PetsTitle>My pets:</PetsTitle>
            </InfoWrapper>

            <PetsList />
        </PetsWrapper>
    );
};

export default PetsData;
