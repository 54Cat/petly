import { useSelector } from 'react-redux';
import { getPets } from 'redux/selectors';
import PetsItem from 'components/PetsItem/PetsItem';

const PetsList = function () {
    const pets = useSelector(getPets);
    console.log(pets.items)
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

            {pets.items.length === 0 && <p>There`s no pets yet</p>}
        </>
    );
};

export default PetsList;
