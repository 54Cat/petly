import { useDispatch } from 'react-redux';
import { deletePetOperation } from 'redux/Pets/petsOperations';
import formatNewsDate from 'components/Utils/helpers/formatNewsDate';

import {
    PetsCard,
    PetsImg,
    TextWrapper,
    PetsName,
    CardText,
    CardTitle,
    DelBtn,
    StyledDeleteIcon,
} from './PetsItem.styled';

const PetsItem = ({ id, name, birthday, breed, comments, photoURL }) => {
    const dispatch = useDispatch();

    const onBtnDelete = () => {
        dispatch(deletePetOperation(id));
    };

    return (
        <PetsCard key={id}>
            <PetsImg src={photoURL} alt="" />
            <TextWrapper>
                <PetsName>
                    <CardTitle>Name:</CardTitle> {name}{' '}
                    <DelBtn type="button" onClick={onBtnDelete}>
                        <StyledDeleteIcon sx={{}} />
                    </DelBtn>
                </PetsName>
                <CardText>
                    <CardTitle>Date of birth:</CardTitle>{' '}
                    {formatNewsDate(birthday)}
                </CardText>
                <CardText>
                    <CardTitle>Breed:</CardTitle> {breed}
                </CardText>
                <CardText>
                    <CardTitle>Comments:</CardTitle> {comments}
                </CardText>
            </TextWrapper>
        </PetsCard>
    );
};

export default PetsItem;
