import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
    'notices/fetchByCategory',
    async (category, thunkAPI) => {
        try {
            const response = await axios.get(
                `https://petly-backend-23cb.onrender.com/api/notices/${category}`
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
