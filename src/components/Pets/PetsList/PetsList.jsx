import { useSelector } from 'react-redux';
import { getPets } from 'redux/selectors';
import PetsItem from 'components/Pets/PetsItem/PetsItem';
import { NoPetsTitle } from 'components/Pets/PetsItem/PetsItem.styled';

const PetsList = function () {
    const pets = useSelector(getPets);
    return (
        <>
            {pets.items.map(
                ({ _id, name, birthday, breed, comments, photoURL }) => {
                    return (
                        <PetsItem
                            key={_id}
                            id={_id}
                            name={name}
                            birthday={birthday}
                            breed={breed}
                            comments={comments}
                            photoURL={photoURL}
                        ></PetsItem>
                    );
                }
            )}

            {pets.items.length === 0 && <NoPetsTitle>Therу are no pets yet! </NoPetsTitle>}
        </>
    );
};

export default PetsList;
