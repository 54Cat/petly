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
    HeartWraper,
    Heart,
} from './ModalNoticeContent.styled';

import * as dayjs from 'dayjs';

const NoticeContent = id => {
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [notice, setNotice] = useState({ owner: '' });

    const dispatch = useDispatch();

    useEffect(() => {
        getNotice(id.id, setNotice, setError);
    }, [id.id]);

    const { isLoggedIn, user } = useSelector(getAuth);

    const onBtnChangeFav = () => {
        if (!isLoggedIn) {
            Notiflix.Notify.failure('Please, login');
            return;
        }
        changeFavorite(id.id, setError).then(value => {
            Notiflix.Notify.success(value);
            if (value === 'Notice added to your favorites') {
                setIsFavorite(true);
                return;
            }
            setIsFavorite(false);
        });
    };

    const date = dayjs(notice.birthday).format('DD MMM, YYYY');

    let categoryName;

    switch (notice.category) {
        case 'lost-found':
            categoryName = 'lost/found';
            break;

        case 'for-free':
            categoryName = 'in good hands';
            break;

        default:
            categoryName = 'sell';
    }

    const onBtnDelete = () => {
        dispatch(deleteNotice(id.id));
    };

    const onBtnRedirect = () => {
        window.location = `tel:${notice.phone}`;
    };

    return (
        <>
            <NoticeCard>
                {error && <h1>Все погано!</h1>}
                <PetInfo>
                    <ImgWrapper>
                        <PetsImg src={notice.imageURL} alt="" />
                        <Category>
                            <CategoryName>{categoryName}</CategoryName>
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
                                {notice.category === 'sell' && (
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
                                {notice.category === 'sell' && (
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
                    {isLoggedIn && user._id === notice.owner._id && (
                        <ActionBtn onClick={onBtnDelete}>Delete</ActionBtn>
                    )}
                    <ActionBtn className="btnFav" onClick={onBtnChangeFav}>
                        {!isFavorite ? 'Add to' : 'Delete from'}
                        <HeartWraper>
                            <Heart
                                viewBox="0 0 26 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_b_28_509)">
                                    <path d="M7 1C3.6868 1 1 3.73373 1 7.10648C1 9.8291 2.05 16.2909 12.3856 22.8229C12.5707 22.9387 12.7833 23 13 23C13.2167 23 13.4293 22.9387 13.6144 22.8229C23.95 16.2909 25 9.8291 25 7.10648C25 3.73373 22.3132 1 19 1C15.6868 1 13 4.70089 13 4.70089C13 4.70089 10.3132 1 7 1Z" />
                                    <path
                                        d="M7 1C3.6868 1 1 3.73373 1 7.10648C1 9.8291 2.05 16.2909 12.3856 22.8229C12.5707 22.9387 12.7833 23 13 23C13.2167 23 13.4293 22.9387 13.6144 22.8229C23.95 16.2909 25 9.8291 25 7.10648C25 3.73373 22.3132 1 19 1C15.6868 1 13 4.70089 13 4.70089C13 4.70089 10.3132 1 7 1Z"
                                        stroke="#F59256"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_28_509"
                                        x="-4"
                                        y="-4"
                                        width="34"
                                        height="32"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="2"
                                        />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_28_509"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_28_509"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </Heart>
                        </HeartWraper>
                    </ActionBtn>
                    <ActionBtn onClick={onBtnRedirect}>Contact</ActionBtn>
                </Buttons>
            </NoticeCard>
        </>
    );
};

export default NoticeContent;
