import axios from 'axios';

export const fetchNews = async data => {
    const response = await axios.post(
        `https://petly-backend-23cb.onrender.com/api/news?search=${searchKey}`
    );
    return response.data;
};