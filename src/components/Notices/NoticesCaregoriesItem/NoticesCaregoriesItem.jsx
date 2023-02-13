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
    BtnDelete,
    BasketWraper,
    Basket,
    BtnThumb,
} from './NoticesCategoriesItemStyled';
import ModalNotice from 'components/Modals/ModalNotice/ModalNotice';
import heart from '../../../data/icons/heart.svg';
import heartActive from '../../../data/icons/heartActive.svg';

// import { getAuth } from '../../redux/selectors';
// import { selectUser } from '../../redux/Auth/AuthSelectors';
import { deleteNotice } from '../../../redux/Notices/noticesOperations';

import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "../../../redux/selectors";

import { selectUser } from "../../../redux/Auth/AuthSelectors"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as dayjs from 'dayjs';

export const NoticesCategoriesItem = ({
    notice,
    favorite,
    updateFavorite,
    // deleteMyNotices,
}) => {
    const { isLoggedIn } = useSelector(getAuth);
    const auth = useSelector(selectUser);

    const dispatch = useDispatch();

    const { _id, imageURL, category, title, breed, location, birthday, owner } =
        notice;

    let isFavorite = false;

    if (favorite) {
        isFavorite = favorite.includes(_id);
    }

    const addToFavorite = async () =>
        isLoggedIn
            ? dispatch(updateFavorite(_id))
            : Notify.failure('Oops... please login or register');

    const deleteNotices = async () => dispatch(deleteNotice(_id));

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
            <NoticesFavoriteBtn type="button" onClick={addToFavorite}>
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
                <BtnThumb>
                    <ModalNotice id={_id}>Learn more</ModalNotice>

                    {isLoggedIn && auth.user._id === owner ? (
                        <BtnDelete
                            className="btnDel"
                            type="button"
                            onClick={deleteNotices}
                        >
                            Delete
                            <BasketWraper>
                                <Basket
                                    width="16"
                                    height="18"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.5 3.5H11.5C11.5 3.10218 11.342 2.72064 11.0607 2.43934C10.7794 2.15804 10.3978 2 10 2C9.60218 2 9.22065 2.15804 8.93934 2.43934C8.65804 2.72064 8.5 3.10218 8.5 3.5ZM7 3.5C7 2.70435 7.31607 1.94129 7.87868 1.37868C8.44129 0.816071 9.20435 0.5 10 0.5C10.7956 0.5 11.5587 0.816071 12.1213 1.37868C12.6839 1.94129 13 2.70435 13 3.5H19C19.1989 3.5 19.3897 3.57902 19.5303 3.71967C19.671 3.86032 19.75 4.05109 19.75 4.25C19.75 4.44891 19.671 4.63968 19.5303 4.78033C19.3897 4.92098 19.1989 5 19 5H18.154L16.3465 18.257C16.2239 19.1554 15.78 19.979 15.0968 20.5752C14.4137 21.1714 13.5377 21.5 12.631 21.5H7.369C6.46227 21.5 5.58626 21.1714 4.90315 20.5752C4.22004 19.979 3.77609 19.1554 3.6535 18.257L1.846 5H1C0.801088 5 0.610322 4.92098 0.46967 4.78033C0.329018 4.63968 0.25 4.44891 0.25 4.25C0.25 4.05109 0.329018 3.86032 0.46967 3.71967C0.610322 3.57902 0.801088 3.5 1 3.5H7ZM8.5 8.75C8.5 8.55109 8.42098 8.36032 8.28033 8.21967C8.13968 8.07902 7.94891 8 7.75 8C7.55109 8 7.36032 8.07902 7.21967 8.21967C7.07902 8.36032 7 8.55109 7 8.75V16.25C7 16.4489 7.07902 16.6397 7.21967 16.7803C7.36032 16.921 7.55109 17 7.75 17C7.94891 17 8.13968 16.921 8.28033 16.7803C8.42098 16.6397 8.5 16.4489 8.5 16.25V8.75ZM12.25 8C12.0511 8 11.8603 8.07902 11.7197 8.21967C11.579 8.36032 11.5 8.55109 11.5 8.75V16.25C11.5 16.4489 11.579 16.6397 11.7197 16.7803C11.8603 16.921 12.0511 17 12.25 17C12.4489 17 12.6397 16.921 12.7803 16.7803C12.921 16.6397 13 16.4489 13 16.25V8.75C13 8.55109 12.921 8.36032 12.7803 8.21967C12.6397 8.07902 12.4489 8 12.25 8Z" />
                                </Basket>
                            </BasketWraper>
                        </BtnDelete>
                    ) : (
                        ''
                    )}

                    {auth.isLoggedIn && auth.user.id === owner ? (
                        <BtnDelete
                            className="btnDel"
                            type="button"
                            onClick={deleteNotices}
                        >
                            Delete
                            <BasketWraper>
                                <Basket
                                    width="16"
                                    height="18"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.5 3.5H11.5C11.5 3.10218 11.342 2.72064 11.0607 2.43934C10.7794 2.15804 10.3978 2 10 2C9.60218 2 9.22065 2.15804 8.93934 2.43934C8.65804 2.72064 8.5 3.10218 8.5 3.5ZM7 3.5C7 2.70435 7.31607 1.94129 7.87868 1.37868C8.44129 0.816071 9.20435 0.5 10 0.5C10.7956 0.5 11.5587 0.816071 12.1213 1.37868C12.6839 1.94129 13 2.70435 13 3.5H19C19.1989 3.5 19.3897 3.57902 19.5303 3.71967C19.671 3.86032 19.75 4.05109 19.75 4.25C19.75 4.44891 19.671 4.63968 19.5303 4.78033C19.3897 4.92098 19.1989 5 19 5H18.154L16.3465 18.257C16.2239 19.1554 15.78 19.979 15.0968 20.5752C14.4137 21.1714 13.5377 21.5 12.631 21.5H7.369C6.46227 21.5 5.58626 21.1714 4.90315 20.5752C4.22004 19.979 3.77609 19.1554 3.6535 18.257L1.846 5H1C0.801088 5 0.610322 4.92098 0.46967 4.78033C0.329018 4.63968 0.25 4.44891 0.25 4.25C0.25 4.05109 0.329018 3.86032 0.46967 3.71967C0.610322 3.57902 0.801088 3.5 1 3.5H7ZM8.5 8.75C8.5 8.55109 8.42098 8.36032 8.28033 8.21967C8.13968 8.07902 7.94891 8 7.75 8C7.55109 8 7.36032 8.07902 7.21967 8.21967C7.07902 8.36032 7 8.55109 7 8.75V16.25C7 16.4489 7.07902 16.6397 7.21967 16.7803C7.36032 16.921 7.55109 17 7.75 17C7.94891 17 8.13968 16.921 8.28033 16.7803C8.42098 16.6397 8.5 16.4489 8.5 16.25V8.75ZM12.25 8C12.0511 8 11.8603 8.07902 11.7197 8.21967C11.579 8.36032 11.5 8.55109 11.5 8.75V16.25C11.5 16.4489 11.579 16.6397 11.7197 16.7803C11.8603 16.921 12.0511 17 12.25 17C12.4489 17 12.6397 16.921 12.7803 16.7803C12.921 16.6397 13 16.4489 13 16.25V8.75C13 8.55109 12.921 8.36032 12.7803 8.21967C12.6397 8.07902 12.4489 8 12.25 8Z" />
                                </Basket>
                            </BasketWraper>
                            {/* <Basket src={basket} alt="Delete" /> */}
                        </BtnDelete>
                    ) : (
                        ''
                    )}
                </BtnThumb>
            </NoticesCardThumb>
        </NoticesItem>
    );
};
