import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import Notiflix from 'notiflix';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const removeAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(response.data);
           
            return response.data;
        } catch (error) {
           
            return thunkAPI.rejectWithValue(error.response.data);
        }
    })
        