import { useDispatch } from 'react-redux';
import { deletePetOperation } from 'redux/Pets/petsOperations';

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

const PetsItem = ({ _id, name, birthday, breed, comments, imgUrl }) => {
    const dispatch = useDispatch();

    const onBtnDelete = () => {
        dispatch(deletePetOperation(_id));
    };

    return (
        <PetsCard>
            <PetsImg src={imgUrl} alt="" />
            <TextWrapper>
                <PetsName>
                    <CardTitle>Name:</CardTitle> {name}{' '}
                    <DelBtn type="button" onClick={onBtnDelete}>
                        <StyledDeleteIcon sx={{}} />
                    </DelBtn>
                </PetsName>
                <CardText>
                    <CardTitle>Date of birth:</CardTitle> {birthday}
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
