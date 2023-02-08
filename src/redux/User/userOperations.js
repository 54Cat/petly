import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUser = createAsyncThunk(
    'user',

    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/user');
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/update',
    async (userId, { rejectWithValue }, credentials) => {
        console.log(userId);
        const result = {...credentials};
        try {
            const { data } = await axios.patch(`user/${userId}`, result);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
