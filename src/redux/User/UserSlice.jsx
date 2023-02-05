import { createSlice } from '@reduxjs/toolkit';
import { userCurrent, updateUser } from 'auth/UserAuth/AuthUser';

const initialState = {
    user: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQ2YzkzNGI3ZjM3YjI0YTg2Mjc1YiIsImlhdCI6MTY3NTU5NTI3M30.v-XySl8Ex-8Vf9yqqwp5vgycaGzWIfsWm6WTW372mu0',
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
