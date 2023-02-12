import axios from 'axios';
axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

export async function getUserInfo() {
    const { data } = await axios.get(`/user`);
    return data;
}

export async function updateUserInfo(userId, credentials) {
    const userUpdates = { ...credentials };
    const { data } = await axios.patch(`/user/${userId}`, userUpdates);
    return data;
}

export async function addPet(formData) {
    const { data } = await axios.post(`user/pet`, formData);
    return data;
}

export async function deletePetById(petId) {
    const { data } = await axios.delete(`user/pet/${petId}`);
    return data;
}

export async function updateFavoriteNotice(noticeId) {
    const { data } = await axios.get(`/favorite/${noticeId}`);
    return data;
}
