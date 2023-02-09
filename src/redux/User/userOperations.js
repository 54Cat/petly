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
    async ({ userId, credentials }, { rejectWithValue }) => {
        try {
            const user = await updateUserInfo(userId, credentials);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);