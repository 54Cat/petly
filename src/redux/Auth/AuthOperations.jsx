import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
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
            toast.success('You have successfully registered');
            const { data } = await axios.post('/auth/register', {
                email,
                password,
                phone,
                city,
                name,
            });
            dispatch(loginUser({ email, password }));
            token.set(data.token);
            return data;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            toast.error(error.message);
            return rejectWithValue(error.message);
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
            toast.success('Successful authorization');
            token.set(data.token);
            return data;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            toast.error(error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const loggedOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.post('/auth/logout');
            token.unset();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const authCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistorToken = state.auth.token;

        if (persistorToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistorToken);
        try {
            const { data } = await axios.get('/user');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
