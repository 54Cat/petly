import axios from 'axios';
// axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

export const fetchNews = async () => {
    const response = await axios.get(
        `news`
    );
    return response.data;
};
