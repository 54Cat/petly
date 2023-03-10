import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const getUserOperation = createAsyncThunk(
    'user/getInfo',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/user");
      return data;
    }
    catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserOperation = createAsyncThunk(
  'user/update',
  async (userId, thunkAPI) => {
    const cityString = userId.newCity;
    const cityUpdate = cityString.toString();
    const state = thunkAPI.getState();
 
    const result = {
      email: userId.newEmail,
      name: userId.newName,
      birthday: userId.newBirthday,
      city: cityUpdate,
      phone: userId.newPhone,
      avatarURL: userId.uploadAvatar,
    };

    const persistedToken = state.auth.token;
    
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    
    try {
      token.set(persistedToken);
      const { data } = await axios.patch("/user/update", result);
      return data;
    }
    catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);