import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../components/Utils/axios/axios';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password, phone, city, name }, { rejectWithValue }) => {
        const a = JSON.stringify({ email, password, phone, city, name });
        console.log({ email, password, phone, city, name });
        try {
            const { data } = await axios.post('/auth/register', a);
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

    extraReducers: {
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
    },
});

export const authSlices = authSlice.reducer;
