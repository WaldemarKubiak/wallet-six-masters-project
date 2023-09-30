import { createSlice } from "@reduxjs/toolkit";
import { getFinance } from "./financeOperations";
import { getTransactions } from "./financeOperations";

const financeInitialState = {
	finances: {
		data: [],
		isLoading: false,
		error: null,
	},
	transcactions: {
		data: [],
		isLoading: false,
		error: null,
	},
};

const financeSlice = createSlice({
	name: "finance",
	initialState: financeInitialState,
	reducers: {
		importInfoData: (state) => state,
	},
	extraReducers: (builder) => {
		builder.addCase(getFinance.pending, (state) => {
			state.finances.isLoading = true;
		});
		builder.addCase(getFinance.rejected, (state, action) => {
			(state.finances.isLoading = false),
				(state.finances.error = action.payload);
		});
		builder.addCase(getFinance.fulfilled, (state, action) => {
			(state.finances.isLoading = false),
				(state.finances.error = null),
				(state.finances.data = action.payload);
		});

		builder.addCase(getTransactions.pending, (state) => {
			state.transcactions.isLoading = true;
		});
		builder.addCase(getTransactions.rejected, (state, action) => {
			(state.transcactions.isLoading = false),
				(state.transcactions.error = action.payload);
		});
		builder.addCase(getTransactions.fulfilled, (state, action) => {
			(state.transcactions.isLoading = false),
				(state.transcactions.error = null),
				(state.transcactions.data = action.payload);
		});
	},
});

export const { importInfoData } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
