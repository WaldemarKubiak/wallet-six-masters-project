import { createSlice } from '@reduxjs/toolkit';
import { getFinance } from './financeOperations';
import { getTransactions } from './financeOperations';

const financeInitialState = {
	finances: {
		data: [],
		isLoading: false,
		error: null,
	},
	transcactions: {
		data: {
			stats: [
				{ category: 'Main expenses', color: '##FED057', total: 10 },
				{ category: 'Products', color: '#ffffff', total: 0 },
				{ category: 'Car', color: '#ffffff', total: 0 },
				{ category: 'Self care', color: '#FD9498', total: 20 },
				{ category: 'Child care', color: '#ffffff', total: 0 },
				{ category: 'Household products', color: '#ffffff', total: 0 },
				{ category: 'Education', color: '#ffffff', total: 0 },
				{ category: 'Leisure', color: '#DAF7E1', total: 20 },
				{ category: 'Entertainment', color: '#ffffff', total: 0 },
				{ category: 'Other expenses', color: '#ffffff', total: 0 },
			],
			expenses: 0,
			income: 0,
			isLoading: false,
			error: null,
		},
	},
};

const financeSlice = createSlice({
	name: 'finance',
	initialState: financeInitialState,
	reducers: {
		importInfoData: state => state,
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
	},
});

export const { importInfoData } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
