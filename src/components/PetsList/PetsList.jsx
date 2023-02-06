import { useSelector } from 'react-redux';
import { getPets } from 'redux/selectors';
import PetsItem from 'components/PetsItem/PetsItem';

const PetsList = function () {
   const pets = useSelector(getPets);
    

    return (
        <>
            {pets.items.map(
                ({ id, name, birthday, breed, comments, imgUrl }) => {
                    return (
                        <PetsItem
                            key={id}
                            id={id}
                            name={name}
                            birthday={birthday}
                            breed={breed}
                            comments={comments}
                            imgUrl={imgUrl}
                        ></PetsItem>
                    );
                }
            )}

            {pets.length === 0 && <p>There`s no pets yet</p>}
        </>
    );
};

export default PetsList;

