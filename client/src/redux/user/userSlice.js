import { createSlice } from '@reduxjs/toolkit';
import { register } from './userOperations';

const authInitialState = {
	user: {
		username: null,
		email: null,
		id: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'user',
	initialState: authInitialState,
	reducers: {
		importInfoData: state => state,
	},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true;
		});
	},
});

export const { importInfoData } = authSlice.actions;
export const userReducer = authSlice.reducer;
