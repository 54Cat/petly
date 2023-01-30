import { PetsCard, Wrapper, PetsImg, CardText } from "./PetsItem.styled";

const PetsItem = ({ id, name, date, breed, text, img }) => {
//   const dispatch = useDispatch();

    const onBtnDelete = () => {
      console.log("click")
    // dispatch(deleteContact(id));
  };

  return (
      <PetsCard>
          <Wrapper><PetsImg src="" alt="" />
      <CardText>
        Name: {name}
      </CardText>
      <CardText>
        Date of birth: {date}
      </CardText>
      <CardText>
        Breed: {breed}
      </CardText>
          <CardText>
        Comments: {text}
      </CardText>
      <button type="button" onClick={onBtnDelete}>
        Delete
      </button></Wrapper>
    </PetsCard>
  );
};

export default PetsItem;