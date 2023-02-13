import axios from 'axios';

export const fetchNews = async () => {
    const response = await axios.get(
        `news`
    );
    return response.data;
};
