import axios from 'axios';

export const fetchNoticesByCategory = async category => {
    const response = await axios.get(
        `https://petly-backend-23cb.onrender.com/api/notices/${category}`
    );
    return response.data;
};
