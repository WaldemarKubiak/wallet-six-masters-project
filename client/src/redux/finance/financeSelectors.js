export const selectGetFinances = state => state.finance.finances.data;

export const selectFinancesIsLoading = state =>
	state.finance.finances.isLoading;

export const selectTransactionsData = state => state.finance.transcactions.data;

export const selectFinancesTransactionsIsLoading = state =>
	state.finance.transcactions.isLoading;

export const selectTransactionForEdit = state => state.finance.transaction.data;

export const selectAddedTransaction = state =>
	state.finance.addedTransactions.data;
