import axios from 'axios';

export async function getNotice(_id, setNotice, setError) {
    try {
        const { data } = await axios.get(`notices/getOne/${_id}`);
        setNotice(data);
    } catch (error) {
        setError(error.message);
    }
}

export async function getOwner(id, setCreator, setError) {
    try {
        const { data } = await axios.get(`/user/${id}`);
        setCreator(data);
    } catch (error) {
        setError(error.message);
    }
}

export async function changeFavorite(noticeId, setFavorite, setError) {
    try {
        const { data } = await axios.get(`/notices/favorite/${noticeId}`);
        setFavorite(data.message);
    } catch (error) {
        setError(error.message);
    }
}
