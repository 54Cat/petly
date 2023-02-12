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

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (
        { email, password, phone, city, name },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const { data } = await axios.post('/auth/register', {
                email,
                password,
                phone,
                city,
                name,
            });
            dispatch(loginUser({ email, password }));
            // token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                email,
                password,
            });
            // token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
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
