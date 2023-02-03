import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loggedOut } from 'auth/UserAuth/AuthUser';
import { userCurrent } from 'auth/UserAuth/AuthUser';
import axios from '../../components/Utils/axios/axios';
// import axios from '../../components/Utils/axios/axios';
import axios from 'axios';
axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
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
            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: state => {
            state.isLoading = true;
            state.status = null;
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = action.payload.message;
            state.isLoading = false;
        },
        [loggedOut.pending](state) {
            state.isLoading = true;
        },
        [loggedOut.fulfilled](state, action) {
            state.isLoading = false;
            state.user = null;
            state.token = '';
            state.isLoggedIn = false;
        },
        [loggedOut.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [userCurrent.pending](state) {
            state.isLoadingCurrentUser = true;
        },
        [userCurrent.fulfilled](state, action) {
            state.isLoadingCurrentUser = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },
        [userCurrent.rejected](state, action) {
            state.isLoadingCurrentUser = false;
            state.error = action.payload;
        },
    },
});

export const authSlices = authSlice.reducer;
