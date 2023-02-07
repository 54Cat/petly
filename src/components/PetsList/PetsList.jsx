import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getUserOperation } from 'redux/User/userOperations';
import { getPets } from 'redux/selectors';
import PetsItem from 'components/PetsItem/PetsItem';

const PetsList = function () {
    const pets = useSelector(getPets);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUserOperation());
    // }, [dispatch]);

    console.log(pets);

    return (
        <>
            {pets.items.map(
                ({ _id, name, birthday, breed, comments, photoURL }) => {
                    return (
                        <PetsItem
                            key={_id}
                            _id={_id}
                            name={name}
                            birthday={birthday}
                            breed={breed}
                            comments={comments}
                            photoURL={photoURL}
                        ></PetsItem>
                    );
                }
            )}

            {pets.length === 0 && <p>There`s no pets yet</p>}
        </>
    );
};

export default PetsList;
