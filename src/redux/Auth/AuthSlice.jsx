// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:4000/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from '../../components/Utils/axios/axios';
import { loginUser } from 'redux/Login/LoginSlice';
import axios from 'axios';
axios.defaults.baseURL = 'https://petly-backend-23cb.onrender.com/api';
const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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
            setAuthToken(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
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
        //Login User
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
    },
});

export const authSlices = authSlice.reducer;
