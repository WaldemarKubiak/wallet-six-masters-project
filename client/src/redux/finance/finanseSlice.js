import { createSlice } from '@reduxjs/toolkit';
import { getFinance } from './financeOperations';

const financeInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'finance',
  initialState: financeInitialState,
  reducers: {
    importInfoData: state => state,
  },
  extraReducers: builder => {
    builder.addCase(getFinance.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getFinance.rejected, (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    });
    builder.addCase(getFinance.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.error = null),
        (state.data = action.payload);
    });
  },
});

export const { importInfoData } = authSlice.actions;
export const financeReducer = authSlice.reducer;
