import axios from 'axios';

export const fetchFriends = async () => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/friends`
    );
    return response.data;
};
