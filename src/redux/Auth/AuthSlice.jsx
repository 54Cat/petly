import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loggedOut from '../../components/Utils/axios/fetchLogout';

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

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                email,
                password,
            });
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.token;
    
    if (token === null) {
      return thunkAPI.rejectWithValue();
    }
    
    try {
      token.set(refreshToken);        
      const { data } = await axios.get("/users");
      return data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
    user: null,
    token: '',
    isLoading: false,
    isLoggedIn: false,
    status: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: {
        [registerUser.pending]: state => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.status = action.payload.message;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },

        [loginUser.pending]: state => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.status = action.payload.message;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        

        [fetchCurrentUser.pending]: state => {
            state.isLoading = true;
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.status = action.payload.message;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        [fetchCurrentUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },

        [loggedOut.pending](state) {
            state.isLoading = true;
        },
        [loggedOut.fulfilled](state, action) {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.token = '';
        },
        [loggedOut.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const authSlices = authSlice.reducer;
