import { createSlice } from "@reduxjs/toolkit";
import { postTransactions } from "./globalOperations";

const initialState = { date: null, category: null, comment: null, sum: null };

const globalSlice = createSlice();

export const { importInfoData } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
