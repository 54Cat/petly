import axios from 'axios';

export const fetchFriends = async () => {
    const response = await axios.get(
        `/friends`
    );
    return response.data;
};
