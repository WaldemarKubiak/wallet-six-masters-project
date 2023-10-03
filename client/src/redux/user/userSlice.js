import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut, refreshUser } from './userOperations';

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
};

const authSlice = createSlice({
	name: 'user',
	initialState: authInitialState,
	reducers: {
		importInfoData: state => state,
	},
	extraReducers: {
		[signIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[signOut.fulfilled](state) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[refreshUser.pending](state) {
			state.isRefreshing = true;
		},
		[refreshUser.fulfilled](state, action) {
			state.isLoggedIn = true;
			state.isRefreshing = false;
			state.user = action.payload;
		},
		[refreshUser.rejected](state) {
			state.isRefreshing = false;
		},
	},
});

export const { importInfoData } = authSlice.actions;
export const userReducer = authSlice.reducer;
