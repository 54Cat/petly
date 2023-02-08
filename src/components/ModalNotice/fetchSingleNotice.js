import axios from 'axios';

export async function getNotice(_id, setNotice, setError) {
    try {
        const { data } = await axios.get(`/getOne/${_id}`);
        setNotice(data);
    } catch (error) {
        setError(error.message);
    }
}
