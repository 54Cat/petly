import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUser = createAsyncThunk(
    'user',

    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/user');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
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
            city: userId.newCity,
            phone: userId.newPhone,
        };
        try {
            const { data } = await axios.patch(`user/${userId}`, result);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
