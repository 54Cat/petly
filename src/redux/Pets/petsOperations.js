// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPet, deletePetById } from 'redux/fetchAPI';

export const addPetOperation = createAsyncThunk(
    'pets/addPet',
    async (
        formData,
        { rejectWithValue }
    ) => {
        try {
            const pet = await addPet(formData);
            return pet;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deletePetOperation = createAsyncThunk(
    'pets/deletePet',
    async petId => {
        try {
            const pets = await deletePetById(petId);
            return pets;
        } catch (error) {
            return error;
        }
    }
);
