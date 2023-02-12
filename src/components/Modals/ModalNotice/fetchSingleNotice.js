import axios from 'axios';

export async function getNotice(id, setNotice, setError) {
    try {
        const { data } = await axios.get(`notices/getOne/${id}`);
        setNotice(data);
    } catch (error) {
        setError(error.message);
    }
}

export async function changeFavorite(noticeId, setError) {
    try {
        const { data } = await axios.get(`/notices/favorite/${noticeId}`);
        return data.message;
    } catch (error) {
        setError(error.message);
    }
}
