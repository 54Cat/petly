import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';
// 'https://petly-backend-23cb.onrender.com/api';

export async function getUserInfo() {
    const { data } = await axios.get(`/user`);
    console.log('робимо фетч за даними юзера, отримуємо:', data);
    return data;
}

export async function updateUserInfo( credentials) {
    const userUpdates = { ...credentials };
    const { data } = await axios.patch('/user', userUpdates);
    console.log(data)
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
