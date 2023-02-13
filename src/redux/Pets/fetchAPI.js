import axios from 'axios';

export async function addPet(formData) {
    const { data } = await axios.post(`user/pet`, formData);
    return data;
}

export async function deletePetById(petId) {
    const { data } = await axios.delete(`user/pet/${petId}`);
    return data;
}
