import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, loggedOut, authCurrentUser } from './AuthOperations';

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

        [authCurrentUser.pending](state, action) {
            state.isLoading = true;
        },
        [authCurrentUser.fulfilled](state, action) {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.user.token;
        },
        [authCurrentUser.rejected](state, action) {
            state.isLoading = false;
            state.user = null;
            state.token = '';
        },
    },
});

export const authReducer = authSlice.reducer;