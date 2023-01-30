import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from '../../components/Utils/axios/axios';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000/api';
const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password, confirm, phone, city, name }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                email,
                password,
                confirm,
                phone,
                city,
                name,
            });
            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }
            return data;
        } catch (error) {
            console.log(error);
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
    },
});

export default authSlice.reducer;