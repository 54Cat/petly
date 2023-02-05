import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';
// baseURL: 'https://petly-backend-23cb.onrender.com/api',
// axios.defaults.headers.common['Authorization'] =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGE2NGNiOWE4NmJjNDI1ODQ4YzgyZSIsImlhdCI6MTY3NTYzMzY0OX0.I-U6ze79hlh9lhchVpmeo_223F6y4Ru0TZxbb68fniI';

export async function getUserInfo() {
    const { data } = await axios.get(`/user`);
    return data;
}

export async function updateUserInfo(userId, credentials) {
    const userUpdates = { ...credentials };
    const { data } = await axios.patch(`/user/${userId}`, userUpdates);
    return data;
}

export async function addPet(name, birthday, breed, text) {
    const newPet = { name, birthday, breed, comments: text };
    const { data } = await axios.post(`user/pets`, newPet);
    return data;
}

export async function deletePetById(petId) {
    const { data } = await axios.delete(`user/pets/${petId}`);
    return data;
}
