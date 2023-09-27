import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axios.defaults.baseURL = 'https://wallet-project-4dhb.onrender.com/api';

export const getFinance = createAsyncThunk(
  'finance/getFinancesData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/transactions');
      setAuthHeader(response.data);

      return response.data.transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
