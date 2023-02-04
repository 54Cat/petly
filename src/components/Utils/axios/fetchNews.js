import axios from 'axios';

export const fetchNews = async searchKey => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/news?search=${searchKey}`
    );
    return response.data;
};
