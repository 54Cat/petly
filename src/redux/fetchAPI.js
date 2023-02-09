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

export async function addPet(name, birthday, breed, text, myPetsPhoto) {
    const newPet = { name, birthday, breed, comments: text, myPetsPhoto };
    const { data } = await axios.post(`user/pet`, newPet);
    return data;
}

export async function deletePetById(petId) {
    const { data } = await axios.delete(`user/pets/${petId}`);
    return data;
}


export async function updateFavoriteNotice(noticeId) {
    const { data } = await axios.get(`/favorite/${noticeId}`);
    return data;
}