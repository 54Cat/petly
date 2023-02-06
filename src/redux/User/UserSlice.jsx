import { createSlice } from '@reduxjs/toolkit';
import { userCurrent, updateUser } from 'auth/UserAuth/AuthUser';

const initialState = {
    user: null,
    token: '',
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [userCurrent.pending](state, _) {
            state.isLoading = true;
        },
        [userCurrent.fulfilled](state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
        [userCurrent.rejected](state, action) {
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

export const userReduser = userSlice.reducer;
