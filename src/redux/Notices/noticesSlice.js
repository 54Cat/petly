import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const noticesSlice = createSlice({
    name: 'notices',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchNotices.pending]: handlePending,
        [fetchNotices.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchNotices.rejected]: handleRejected,
    },
});

export const noticesReducer = noticesSlice.reducer;
