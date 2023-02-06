// import axios from "axios";
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

export const userCurrent = createAsyncThunk(
    '/user',

    async (_, { rejectWithValue, getState }) => {
        const { user } = getState();
        const userToken = user.token;
        console.log(userToken);

        token.set(userToken);

        if (userToken === null) {
            return rejectWithValue();
        }

        try {
            const { data } = await axios.get('/user');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loggedOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.post('/auth/logout');
            // console.log(data);
            token.unset();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/update',
    async (userId, { rejectWithValue }) => {
        console.log(userId);
        const result = {
            email: userId.newEmail,
            name: userId.newName,
            birthday: userId.newBirthday,
            city: userId.nweCity,
            phone: userId.newPhone,
        };
        try {
            const { data } = await axios.put(`user/${userId}`, result);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
