// import { getNotice } from './fetchSingleNotice';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

import {
    NoticeCard,
    PetInfo,
    PetsImg,
    TextContent,
    Title,
    PetData,
    CategoryData,
    ValueData,
    Comments,
    CommentsTitle,
} from './ModalNoticeContent.styled';

const NoticeContent = () => {
    // const [error, setError] = useState(null);
    // const [notice, setNotice] = useState(null);
    // const { noticeId } = useParams();

    // useEffect(() => {
    //     getNotice(noticeId, setNotice, setError);
    // }, [noticeId]);

    const notice = {
        title: 'Some info about this pet',
        name: 'Matto',
        birthday: '12/02/2023',
        breed: 'dog',
        location: 'Lviv, Lviv',
        comments: 'dejhfjfjnvhdnvjhnfjn jh jefkje kd  je kje eke  kth hh',
        price: '500',
        sex: 'male',
        category: 'cell',
        imageURL:
            'https://sobakovod.club/uploads/posts/2021-11/1638064014_3-sobakovod-club-p-sobaki-morda-dovolna-3.jpg',
    };

    return (
        <>
            {/* {error && <h1>Все погано!</h1>} */}
            <NoticeCard>
                <PetInfo>
                    <PetsImg src={notice.imageURL} alt="" />
                    <TextContent>
                        <Title>{notice.title}</Title>
                        <PetData>
                            <CategoryData>
                                <li>
                                    <p>Name:</p>
                                </li>
                                <li>
                                    <p>Birthday:</p>
                                </li>
                                <li>
                                    <p>Breed:</p>
                                </li>
                                <li>
                                    <p>Location:</p>
                                </li>
                                <li>
                                    <p>The sex:</p>
                                </li>
                                {notice.category === 'cell' && (
                                    <li>
                                        <p>Price:</p>
                                    </li>
                                )}
                            </CategoryData>
                            <ValueData>
                                <li>
                                    <p>{notice.name}</p>
                                </li>
                                <li>
                                    <p>{notice.birthday}</p>
                                </li>
                                <li>
                                    <p>{notice.breed}</p>
                                </li>
                                <li>
                                    <p>{notice.location}</p>
                                </li>
                                <li>
                                    <p>{notice.sex}</p>
                                </li>
                                {notice.category === 'cell' && (
                                    <li>
                                        <p>{notice.price}</p>
                                    </li>
                                )}
                            </ValueData>
                        </PetData>
                    </TextContent>
                </PetInfo>
                <Comments>
                    <CommentsTitle>Comments: </CommentsTitle>
                    {notice.comments}
                </Comments>
            </NoticeCard>
        </>
    );
};

export default NoticeContent;
