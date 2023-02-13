import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


 const loggedOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.post('/auth/logout');
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export default loggedOut;