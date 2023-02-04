import { createSlice } from '@reduxjs/toolkit';
import { userCurrent } from 'auth/UserAuth/AuthUser';

const initialState = {
    user: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQ2YzkzNGI3ZjM3YjI0YTg2Mjc1YiIsImlhdCI6MTY3NTUxMzI2MH0.txKxefUHk0IBiuhn2JVLrMW_RwhyG81sKDCsyM36iPg',
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
    },
});

export const userReduser = userSlice.reducer;
