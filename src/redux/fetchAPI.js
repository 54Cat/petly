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

export async function addPet(body) {
    // const newPet = { name, birthday, breed, comments, myPetsPhoto };
    const { data } = await axios.post(`user/pet`, body );
    return data;
}
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTM2ZTVmZDgzZjQ3ZTJkYmVlMmNkMSIsImlhdCI6MTY3NTk3OTQ2NX0.1OEwW5S81TcxRNrssmEQkS6XxD_7DD8yvmvDd7M21QQ' 
 
// const reqInstance = axios.create({ 
//     headers: { 
//         'Authorization' : `Bearer ${token}`, 
//         'Content-Type': 'multipart/form-data', 
//      } 
//    } 
//  )

 
// export async function addPet(body) { 

//     const { data } = await reqInstance.post(`user/pet`, body); 
//     return data; 
// }

export async function deletePetById(petId) {
    const { data } = await axios.delete(`user/pets/${petId}`);
    return data;
}


export async function updateFavoriteNotice(noticeId) {
    const { data } = await axios.get(`/favorite/${noticeId}`);
    return data;
}