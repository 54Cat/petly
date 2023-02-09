import {
    NoticesItem,
    NoticesImageThumb,
    NoticesImage,
    NoticesCategoryNameContainer,
    NoticesCategoryName,
    NoticesFavoriteBtn,
    Favorite,
    NoticesCardThumb,
    NoticesCardTitle,
    NoticesCardInfoList,
    NoticesCardInfoThumb,
    NoticesCardInfoItem,
    BtnLearnMore
} from "./NoticesCategoriesItemStyled"
import heart from '../../data/icons/heart.svg'

export const NoticesCategoriesItem = ({ notice }) => {
    const { _id, imageURL, category, title, breed, location, birthday } = notice;
    console.log("birthday", birthday);
    // const today = new Date();
    // const age = Math.floor((date.getTime() - birthday.getTime()) / 31536000000);
    const age = 5;

    return    <NoticesItem key={_id}>
        <NoticesImageThumb>
            <NoticesImage src={imageURL} alt="Photo_notices" />
        </NoticesImageThumb>
        <NoticesCategoryNameContainer>
            <NoticesCategoryName>{category}</NoticesCategoryName>
        </NoticesCategoryNameContainer>
        <NoticesFavoriteBtn type="button">
                <Favorite src={heart} alt="Favorite" />
        </NoticesFavoriteBtn>
        <NoticesCardThumb>
        <NoticesCardTitle>{title}</NoticesCardTitle>
            <NoticesCardInfoThumb>
                <NoticesCardInfoList>
                    <NoticesCardInfoItem>Breed:</NoticesCardInfoItem>
                    <NoticesCardInfoItem>Location:</NoticesCardInfoItem>
                    <NoticesCardInfoItem>Age:</NoticesCardInfoItem>
                </NoticesCardInfoList>
                <NoticesCardInfoList>
                    <NoticesCardInfoItem>{breed}</NoticesCardInfoItem>
                    <NoticesCardInfoItem>{location}</NoticesCardInfoItem>
                    <NoticesCardInfoItem>{age} year</NoticesCardInfoItem>
                </NoticesCardInfoList>

            </NoticesCardInfoThumb>

                <BtnLearnMore type='button'
                    // onClick={() => dispatch()}
                >Learn more</BtnLearnMore>

        </NoticesCardThumb>
        </NoticesItem>
}