import Notiflix from 'notiflix';

import { getNotice, changeFavorite } from './fetchSingleNotice';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNotice } from 'redux/Notices/noticesOperations';
import { getAuth } from 'redux/selectors';
import {
    NoticeCard,
    PetInfo,
    ImgWrapper,
    PetsImg,
    Category,
    CategoryName,
    TextContent,
    Title,
    PetData,
    DataItem,
    ValueText,
    CategoryText,
    CategoryData,
    ValueData,
    Comments,
    CommentsTitle,
    Buttons,
    ActionBtn,
} from './ModalNoticeContent.styled';

import * as dayjs from 'dayjs';

const NoticeContent = id => {
    const [error, setError] = useState(null);
    const [notice, setNotice] = useState({ owner: { _id: '' } });

    const dispatch = useDispatch();

    useEffect(() => {
        getNotice(id.id, setNotice, setError);
    }, [id]);

    const { isLoggedIn, user } = useSelector(getAuth);

    const onBtnChangeFav = () => {
        if (!isLoggedIn) {
            Notiflix.Notify.failure('Please, login');
            return;
        }
        changeFavorite(id.id, setError).then(value =>
            Notiflix.Notify.success(value)
        );
    };

    const date = dayjs(notice.birthday).format('DD MMM, YYYY');

    const onBtnDelete = () => {
        if (user.id !== notice.owner._id) {
            Notiflix.Notify.failure(
                'You can not do it, it`s not your own notice'
            );
            return;
        }

        dispatch(deleteNotice(id.id));
    };

    const onBtnRedirect = () => {
        window.location = `tel:${notice.phone}`;
    };

    return (
        <>
            {error && <h1>Все погано!</h1>}
            <NoticeCard>
                <PetInfo>
                    <ImgWrapper>
                        <PetsImg src={notice.imageURL} alt="" />
                        <Category>
                            <CategoryName>{notice.category}</CategoryName>
                        </Category>
                    </ImgWrapper>
                    <TextContent>
                        <Title>{notice.title}</Title>
                        <PetData>
                            <CategoryData>
                                <DataItem>
                                    <CategoryText>Name:</CategoryText>
                                </DataItem>
                                <DataItem>
                                    <CategoryText>Birthday:</CategoryText>
                                </DataItem>
                                <DataItem>
                                    <CategoryText>Breed:</CategoryText>
                                </DataItem>
                                <DataItem>
                                    <CategoryText>Location:</CategoryText>
                                </DataItem>
                                <DataItem>
                                    <CategoryText>The sex:</CategoryText>
                                </DataItem>
                                <DataItem>
                                    <CategoryText>Email:</CategoryText>
                                </DataItem>
                                <DataItem>
                                    <CategoryText>Phone:</CategoryText>
                                </DataItem>
                                {notice.category === 'cell' && (
                                    <DataItem>
                                        <CategoryText>Price:</CategoryText>
                                    </DataItem>
                                )}
                            </CategoryData>
                            <ValueData>
                                <DataItem>
                                    <ValueText>{notice.name}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{date}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{notice.breed}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{notice.location}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{notice.sex}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{notice.email}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{notice.phone}</ValueText>
                                </DataItem>
                                {notice.category === 'cell' && (
                                    <DataItem>
                                        <ValueText>{notice.price}</ValueText>
                                    </DataItem>
                                )}
                            </ValueData>
                        </PetData>
                    </TextContent>
                </PetInfo>
                <Comments>
                    <CommentsTitle>Comments: </CommentsTitle>
                    {notice.comments}
                </Comments>
                <Buttons>
                    {isLoggedIn && (
                        <ActionBtn onClick={onBtnDelete}>Delete</ActionBtn>
                    )}
                    <ActionBtn onClick={onBtnRedirect}>Contact</ActionBtn>
                    <ActionBtn onClick={onBtnChangeFav}>Add to </ActionBtn>
                </Buttons>
            </NoticeCard>
        </>
    );
};

export default NoticeContent;
