// import { getNotice } from './fetchSingleNotice';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/selectors';
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

const NoticeContent = id => {
    // const [error, setError] = useState(null);
    // const [notice, setNotice] = useState(null);
    // const { noticeId } = useParams();

    // useEffect(() => {
    //     getNotice(noticeId, setNotice, setError);
    // }, [noticeId]);

    // const { isLoggedIn, user } = useSelector(getAuth);

    const isLoggedIm = true;

    const creator = {
        email: 'user@mail.com',
        phone: '+380971234567',
    };

    const notice = {
        title: 'Сute dog looking for a home',
        name: 'Matto',
        birthday: '12/02/2023',
        breed: 'dog',
        location: 'Lviv, Lviv',
        comments:
            'Comments:  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem',
        price: '500',
        sex: 'male',
        category: 'cell',
        owner: '25',
        imageURL:
            'https://sobakovod.club/uploads/posts/2021-11/1638064014_3-sobakovod-club-p-sobaki-morda-dovolna-3.jpg',
    };

    return (
        <>
            {/* {error && <h1>Все погано!</h1>} */}
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
                                    <ValueText>{notice.birthday}</ValueText>
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
                                    <ValueText>{creator.email}</ValueText>
                                </DataItem>
                                <DataItem>
                                    <ValueText>{creator.phone}</ValueText>
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
                    {/* {isLoggedIn &&
                        (user.id === notice.owner)(
                            <ActionBtn>Delete notice</ActionBtn>
                        )} */}
                    {isLoggedIm && <ActionBtn>Delete</ActionBtn>}
                    <ActionBtn>Contact</ActionBtn>
                    <ActionBtn>Add to </ActionBtn>
                </Buttons>
            </NoticeCard>
        </>
    );
};

export default NoticeContent;
