import axios from 'axios';

export const fetchNews = async () => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/news`
    );
    return response.data;
};
