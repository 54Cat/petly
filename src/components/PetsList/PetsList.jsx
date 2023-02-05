// import { useSelector } from 'react-redux';
// import { getPets } from 'redux/selectors';
import PetsItem from 'components/PetsItem/PetsItem';

const PetsList = function () {
    // const pets = useSelector(getPets);
    const pets = {
        items: [
            {
                id: '1',
                name: 'Corellos',
                birthday: '3/4/2012',
                breed: 'dober',
                imgUrl: 'https://static-bebeautiful-in.unileverservices.com/1200/900/Why-you-must-eat-an-orange-every-day_mobilehome.jpg',
                comments:
                    'hfjh hf dhdkdjdk df khdkhfk h d hh h d hh dh hddh dh h dfh dhd dh hdfh dhdf jh dfh etjydkdu kdf d d',
            },
            {
                id: '2',
                name: 'Grata',
                birthday: '3/4/2012',
                breed: 'dober',
                imgUrl: 'https://static-bebeautiful-in.unileverservices.com/1200/900/Why-you-must-eat-an-orange-every-day_mobilehome.jpg',
                comments:
                    'hfjh hf dhdkdjdk df khdkhfk h d hh h d hh dh hddh dh h dfh dhd dh hdfh dhdf jh dfh etjydkdu kdf d d',
            },
            {
                id: '3',
                name: 'Moko',
                birthday: '3/4/2012',
                breed: 'dober',
                imgUrl: 'https://static-bebeautiful-in.unileverservices.com/1200/900/Why-you-must-eat-an-orange-every-day_mobilehome.jpg',
                comments:
                    'hfjh hf dhdkdjdk df khdkhfk h d hh h d hh dh hddh dh h dfh dhd dh hdfh dhdf jh dfh etjydkdu kdf d d',
            },
            {
                id: '4',
                name: 'Tutina',
                birthday: '3/4/2012',
                breed: 'dober',
                imgUrl: 'https://static-bebeautiful-in.unileverservices.com/1200/900/Why-you-must-eat-an-orange-every-day_mobilehome.jpg',
                comments:
                    'hfjh hf dhdkdjdk df khdkhfk h d hh h d hh dh hddh dh h dfh dhd dh hdfh dhdf jh dfh etjydkdu kdf d d',
            },
            {
                id: '5',
                name: 'Kritsu',
                birthday: '3/4/2012',
                breed: 'dober',
                imgUrl: 'https://static-bebeautiful-in.unileverservices.com/1200/900/Why-you-must-eat-an-orange-every-day_mobilehome.jpg',
                comments:
                    'hfjh hf dhdkdjdk df khdkhfk h d hh h d hh dh hddh dh h dfh dhd dh hdfh dhdf jh dfh etjydkdu kdf d d',
            },
        ],
    };

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
