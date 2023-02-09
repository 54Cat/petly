import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, updateUserInfo } from 'redux/fetchAPI';

export const getUserOperation = createAsyncThunk(
    'user/getInfo',
    async (_, { rejectWithValue }) => {
        try {
            const userData = await getUserInfo();
            return userData;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateUserOperation = createAsyncThunk(
    'user/updateInfo',
    async ({ _, credentials }, { rejectWithValue }) => {
        try {
            const user = await updateUserInfo(_, credentials);
            console.log(user);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);