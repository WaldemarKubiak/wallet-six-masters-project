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
      const state = thunkAPI.getState();
      const token = state?.user?.token || '';

      if (!token)
        return thunkAPI.rejectWithValue('Valid token is not provided');
      setAuthHeader(token);

      const response = await axios.post('/transactions');

      return response.data.data.transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
