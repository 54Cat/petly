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

export const addNoticeOperation = createAsyncThunk(
    'pets/addNotice',
    async (formData,
        { rejectWithValue }) => {
        try {
            const response = await axios.post(`/notices`, formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteNotice = createAsyncThunk(
    'notices/deleteNotice',
    async noticeId => {
    console.log("deleteNotice")

        try {
            
            const response = await axios.delete(`/notices/${noticeId}`);
            const removedNotice = response.data;
            return removedNotice;
        } catch (error) {
            return error;
        }
    }
);
