import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    importInfoData: (state) => state,
    setIsModalAddTransactionOpen(state, action) {
      state.isModalAddTransactionOpen = action.payload;
    },
    setIsModalLogoutOpen(state, action) {
      state.isModalLogoutOpen = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  importInfoData,
  setIsModalAddTransactionOpen,
  setIsModalLogoutOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
