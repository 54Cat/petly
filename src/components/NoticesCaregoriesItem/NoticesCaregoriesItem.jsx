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
    BtnLearnMore,
} from './NoticesCategoriesItemStyled';
import heart from '../../data/icons/heart.svg';
import heartActive from '../../data/icons/heartActive.svg';

// import { updateFavoriteNotice } from '../../redux/fetchAPI'
// import { useSelector } from "react-redux";
// import { getAuth } from "../../redux/selectors"
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as dayjs from 'dayjs';

export const NoticesCategoriesItem = ({ notice, favorite }) => {
    // const authSelector = useSelector(getAuth);
    const { _id, imageURL, category, title, breed, location, birthday } =
        notice;
    let isFavorite = false;

    if (favorite) {
        isFavorite = favorite.includes(_id);
    }

    // const addToFavorite = async() =>
    //     authSelector.isLoggedIn ? updateFavoriteNotice :
    //         Notify.failure('Oops... please login or register')

    const date1 = dayjs();
    const date2 = dayjs(birthday);
    const age = Math.floor(date1.diff(date2) / 31536000000);

    return (
        <NoticesItem>
            <NoticesImageThumb>
                <NoticesImage src={imageURL} alt="Photo_notices" />
            </NoticesImageThumb>
            <NoticesCategoryNameContainer>
                <NoticesCategoryName>{category}</NoticesCategoryName>
            </NoticesCategoryNameContainer>
            <NoticesFavoriteBtn
                type="button"
                // onClick={addToFavorite}
            >
                {!isFavorite ? (
                    <Favorite src={heart} alt="Favorite" />
                ) : (
                    <Favorite src={heartActive} alt="Favorite" />
                )}
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
                        {age <= 0 ? (
                            <NoticesCardInfoItem>
                                under 1 year old
                            </NoticesCardInfoItem>
                        ) : (
                            <NoticesCardInfoItem>
                                {age} year
                            </NoticesCardInfoItem>
                        )}
                    </NoticesCardInfoList>
                </NoticesCardInfoThumb>

                <BtnLearnMore
                    type="button"
                    // onClick={() => dispatch()}
                >
                    Learn more
                </BtnLearnMore>
            </NoticesCardThumb>
        </NoticesItem>
    );
};
