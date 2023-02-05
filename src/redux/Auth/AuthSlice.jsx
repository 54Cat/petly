// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:4000/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loggedOut } from 'auth/UserAuth/AuthUser';

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
    async ({ email, password, phone, city, name }, { rejectWithValue }) => {
        console.log(email, password, phone, city, name);
        try {
            const { data } = await axios.post('/auth/register', {
                email,
                password,
                phone,
                city,
                name,
            });
            token.set(data.token);
            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    user: null,
    token: '',
    isLoading: false,
    status: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: {
        //Register USER
        [registerUser.pending]: state => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = action.payload.message;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isLoading = false;
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        [loggedOut.pending](state) {
            state.isLoading = true;
        },
        [loggedOut.fulfilled](state, action) {
            state.isLoading = false;
            state.user = null;
            state.token = '';
        },
        [loggedOut.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        //Login User
    },
});

export const authSlices = authSlice.reducer;
