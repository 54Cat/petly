// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { wrongLogin, wrongRegistration } from "components/Notifigation/Notification";
import instance from "components/Utils/axios/axios";
// export const instanceContact = axios.create({
//   baseURL: 'http://localhost:4000/api',
// });

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  }
}
  
export const userCurrent = createAsyncThunk('user/',
      
    async (_, { rejectWithValue, getState }) => {
        const { auth } = getState();
        console.log(auth)
      const userToken = auth.token;
        console.log(userToken)
      

    if (auth.userToken === null) {
      return rejectWithValue();

    }
    
    try {
    token.set(userToken)
      const { data } = await instance.get('/user');
      console.log(data)
        return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.message);
    }
    
  });
    
  export const loggedOut = createAsyncThunk('auth/logout',
    async (_, thunkApi) => {
      
    try {
      const { data } = await instance.post('/auth/logout');
      console.log(data)
      token.unset();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
      });
  
  
