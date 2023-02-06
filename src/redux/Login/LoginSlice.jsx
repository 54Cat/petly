import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../components/Utils/axios/axios';

axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        console.log(email, password);
        try {
            const { data } = await axios.post('/auth/login', {
                email,
                password,
            });
            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
