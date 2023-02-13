import axios from 'axios';

export const fetchFavoriteNotices = async () => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/notices/myFavorite`
    );
    return response.data;
};

export const updateFavoriteNotice = async (noticeId) => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/notices/favorite/${noticeId}`
    );
    return response.data;
};


export const fetchDeleteNotice = async (noticeId) => {
    console.log("fetchDeleteNotice")
    const response = await axios.delete(
        `https://petly-backend-23cb.onrender.com/api/notices/${noticeId}`
    );
    return response.data;
};
