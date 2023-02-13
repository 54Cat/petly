import { createSlice } from '@reduxjs/toolkit';
import {
    fetchNotices,
    deleteNotice,
    addNoticeOperation,
} from './noticesOperations';

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

        [addNoticeOperation.pending]: handlePending,
        [addNoticeOperation.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = [...state.items, action.payload];
        },

        [addNoticeOperation.rejected]: handleRejected,

        [deleteNotice.pending]: handlePending,
        [deleteNotice.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = [
                ...state.items.filter(
                    ({ _id }) => _id !== action.payload.data._id
                ),
            ];
        },

        [deleteNotice.rejected]: handleRejected,
    },
});

export const noticesReducer = noticesSlice.reducer;
