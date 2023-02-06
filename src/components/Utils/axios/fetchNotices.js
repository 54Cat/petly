import axios from 'axios';

export const fetchAllNotices = async () => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/notices`
    );
    return response.data;
};
