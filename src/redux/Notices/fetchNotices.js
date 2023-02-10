import axios from 'axios';

export const fetchFavoriteNotices = async () => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/notices/myFavorite`
    );
    return response.data;
};
