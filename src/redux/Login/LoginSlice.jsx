import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
};
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
export const loginSlice = createSlice({
    name: 'login',
    initialState,

    extraReducers: {
        //Register USER
        [loginUser.pending]: state => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        //Login User
    },
});

export const loginSlices = loginSlice.reducer;
