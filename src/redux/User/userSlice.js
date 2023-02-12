import { createSlice } from '@reduxjs/toolkit';
import { getUserOperation, updateUserOperation } from './userOperations';
import { loggedOut } from '../Auth/AuthOperations';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: { },
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getUserOperation.fulfilled]: (state, { payload }) => {
            // console.log('це операція getUserOperation і пейлод', payload);
            return {
                ...state,
                user: { ...payload.user },
                isLoading: false,
                error: null,
            };
        },
        [getUserOperation.pending]: state => {
            return { ...state, isLoading: true };
        },
        [getUserOperation.rejected]: (state, { payload }) => {
            // console.log('AaronErr', payload);
            return { ...state, error: payload.name, isLoading: false };
        },

        [updateUserOperation.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                user: { ...payload.user },
                isLoading: false,
                error: null,
            };
        },
        [updateUserOperation.pending]: state => {
            return { ...state, isLoading: true };
        },
        [updateUserOperation.rejected]: (state, { payload }) => {
            return { ...state, error: payload, isLoading: false };
        },

        [loggedOut.pending](state) {
            state.isLoading = true;
        },
        [loggedOut.fulfilled](state, action) {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = '';
            state.token = '';
        },
        [loggedOut.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

    },
});

export const userReducer = userSlice.reducer;