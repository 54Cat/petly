import axios from 'axios';

export const fetchFavoriteNotices = async () => {
    const response = await axios.get(
        `/notices/myFavorite`
    );
    return response.data;
};

export const updateFavoriteNotice = async (noticeId) => {
    const response = await axios.get(
        `/notices/favorite/${noticeId}`
    );
    return response.data;
};


export const fetchDeleteNotice = async (noticeId) => {
    const response = await axios.delete(
        `/notices/${noticeId}`
    );
    return response.data;
};
