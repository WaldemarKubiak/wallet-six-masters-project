import { createSlice } from '@reduxjs/toolkit';
import { getFinance } from './financeOperations';
import { getTransactions } from './financeOperations';
import { postTransactions } from './financeOperations';
import { editTransaction } from './financeOperations';

const financeInitialState = {
	finances: {
		data: [],
		isLoading: false,
		error: null,
	},
	transcactions: {
		data: {
			stats: [
				{ category: 'Main expenses', color: '#ffffff', total: 0 },
				{ category: 'Products', color: '#ffffff', total: 0 },
				{ category: 'Car', color: '#ffffff', total: 0 },
				{ category: 'Self care', color: '#ffffff', total: 0 },
				{ category: 'Child care', color: '#ffffff', total: 0 },
				{ category: 'Household products', color: '#ffffff', total: 0 },
				{ category: 'Education', color: '#ffffff', total: 0 },
				{ category: 'Leisure', color: '#ffffff', total: 0 },
				{ category: 'Entertainment', color: '#ffffff', total: 0 },
				{ category: 'Other expenses', color: '#ffffff', total: 0 },
			],
			expenses: 0,
			income: 0,
			isLoading: false,
			error: null,
		},
	},
	addedTransactions: {
		data: null,
		isLoading: false,
		error: null,
	},
	editTransaction: {
		data: {
			date: null,
			income: null,
			category: null,
			comment: null,
			sum: null,
			id: null,
		},
		isLoading: false,
		error: null,
	},
};

const financeSlice = createSlice({
	name: 'finance',
	initialState: financeInitialState,
	reducers: {
		importInfoData: state => state,
		importEditTransactionData(state, action) {
			state.editTransaction.data = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(getFinance.pending, state => {
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

		builder.addCase(getTransactions.pending, state => {
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

		builder.addCase(postTransactions.pending, state => {
			state.addedTransactions.isLoading = true;
		});
		builder.addCase(postTransactions.rejected, (state, action) => {
			(state.addedTransactions.isLoading = false),
				(state.addedTransactions.error = action.payload);
		});

		builder.addCase(postTransactions.fulfilled, (state, action) => {
			(state.addedTransactions.isLoading = false),
				(state.addedTransactions.error = null),
				(state.addedTransactions.data = action.payload);
		});

		builder.addCase(editTransaction.pending, state => {
			state.editTransaction.isLoading = true;
		});
		builder.addCase(editTransaction.rejected, (state, action) => {
			(state.editTransaction.isLoading = false),
				(state.editTransaction.error = action.payload);
		});
		builder.addCase(editTransaction.fulfilled, (state, action) => {
			(state.editTransaction.isLoading = false),
				(state.editTransaction.error = null),
				(state.editTransaction.data = action.payload);
		});
	},
});

export const { importInfoData, importEditTransactionData } =
	financeSlice.actions;
export const financeReducer = financeSlice.reducer;
