import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './userOperations';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false,
    },
    extraReducers: {
        [fetchUser.pending](state, _) {
            state.isLoading = true;
        },
        [fetchUser.fulfilled](state, action) {
            state.isLoading = false;
            state.user = action.payload;
            console.log(state.user);
        },
        [fetchUser.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateUser.pending](state) {
            state.isLoading = true;
        },
        [updateUser.fulfilled](state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
        [updateUser.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
