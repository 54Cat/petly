import axios from 'axios';


const instance = axios.create({
    baseURL: "https://petly-backend-23cb.onrender.com"
});

export const addMyPet = async (data) => {
    const response = await instance.post('user/pets', data);
    return response;
};