import { createSlice } from '@reduxjs/toolkit';
import { addPetOperation, deletePetOperation } from './petsOperations';
import { getUserOperation } from 'redux/User/userOperations';

const petsSlice = createSlice({
    name: 'pets',
    initialState: {
        items: [],

        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getUserOperation.fulfilled]: (state, { payload }) => {
            return {
                ...state,

                items: [...payload.pets],

                isLoading: false,
                error: null,
            };
        },
        [getUserOperation.pending]: state => {
            return { ...state, isLoading: true };
        },
        [getUserOperation.rejected]: (state, { payload }) => {
            return { ...state, error: payload.name, isLoading: false };
        },

        [addPetOperation.fulfilled]: (state, { payload }) => {
            return {
                ...state,

                items: [...state.pets, payload],

                isLoading: false,
                error: null,
            };
        },
        [addPetOperation.pending]: state => {
            return { ...state, isLoading: true };
        },
        [addPetOperation.rejected]: (state, { payload }) => {
            return { ...state, error: payload, isLoading: false };
        },

        [deletePetOperation.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                items: [
                    ...state.items.filter(
                        ({ _id }) => _id !== payload.data._id
                    ),
                ],
                isLoading: false,
            };
        },
        [deletePetOperation.pending]: state => {
            return { ...state, isLoading: true };
        },
        [deletePetOperation.rejected]: (state, { payload }) => {
            return { ...state, error: payload };
        },
    },
});

export const petsReducer = petsSlice.reducer;
