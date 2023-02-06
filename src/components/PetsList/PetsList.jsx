import {
    Pets,
    PetsCard,
    PetsImg,
    TextWrapper,
    PetsName,
    CardText,
    CardTitle,
    DelBtn,
    StyledDeleteIcon,
} from './PetsList.styled';

const PetsList = function () {
    const pets = [
        {
            id: 7676,
            name: 'Johnny',
            date: Date.now(),
            breed: 'dog',
            text: 'jhjhjhj',
            img: 'jhjh',
        },
        {
            id: 8787,
            name: 'Jack',
            date: Date.now(),
            breed: 'cat',
            text: 'jhjhhf овр оао овавро оваро овао овао оваро роваора оврао оваро вораорао воаро воар оваро овроав воаров овро овdjh dfhh djfh dhf jhfdh dfj djh djh dhj djh djh dh djh djfh hd dh djh d hdfj djf djh dj djh dfj dfj djh djh djh jdh djh dfh dfh dfh djh djh djh  dаро овро оровар аора варов р ао аорр аоа о  росар о о ао ',
            img: 'fg',
        },
    ];
    const isLoggedIn = true;

    const onBtnDelete = () => {
        console.log('click');
        // dispatch(deleteContact(id));
    };

    return (
        <>
            {isLoggedIn && (
                <Pets>
                    {pets.map(({ id, name, date, breed, text, img }) => {
                        return (
                            <PetsCard>
                                <PetsImg
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg"
                                    alt=""
                                />
                                <TextWrapper>
                                    <PetsName>
                                        <CardTitle>Name:</CardTitle> {name}{' '}
                                        <DelBtn
                                            type="button"
                                            onClick={onBtnDelete}
                                        >
                                            <StyledDeleteIcon sx={{}} />
                                        </DelBtn>
                                    </PetsName>
                                    <CardText>
                                        <CardTitle>Date of birth:</CardTitle>{' '}
                                        {date}
                                    </CardText>
                                    <CardText>
                                        <CardTitle>Breed:</CardTitle> {breed}
                                    </CardText>
                                    <CardText>
                                        <CardTitle>Comments:</CardTitle> {text}
                                    </CardText>
                                </TextWrapper>
                            </PetsCard>
                        );
                    })}
                </Pets>
            )}

            {pets.length === 0 && <p>There`s no pets yet</p>}
        </>
    );
};

export default PetsList;
