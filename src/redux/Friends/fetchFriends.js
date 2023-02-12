import axios from 'axios';
axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

export const fetchFriends = async () => {
    const response = await axios.get(
        `/friends`
    );
    return response.data;
};
