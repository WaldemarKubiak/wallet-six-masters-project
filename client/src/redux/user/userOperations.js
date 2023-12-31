import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://wallet-project-4dhb.onrender.com/api';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
	'auth/register',
	async (credentials, thunkAPI) => {
		try {
			const res = await axios.post('/users/signup', credentials);
			return res.data;
		} catch (e) {
			Notiflix.Notify.init({
				timeout: 5000,
			});
			Notiflix.Notify.failure(e.response.data.message);
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const signIn = createAsyncThunk(
	'auth/signIn',
	async (credentials, thunkAPI) => {
		try {
			const res = await axios.post('/users/login', credentials);
			setAuthHeader(res.data.token);
			return res.data;
		} catch (e) {
			Notiflix.Notify.init({
				timeout: 5000,
			});
			Notiflix.Notify.failure(e.response.data.message);
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
	try {
		await axios.get('/users/logout');
		clearAuthHeader();
	} catch (e) {
		Notiflix.Notify.init({
			timeout: 5000,
		});
		Notiflix.Notify.failure(e.response.data.message);
		return thunkAPI.rejectWithValue(e.response.data);
	}
});

export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const token = state?.auth?.token;

		if (!token) return thunkAPI.rejectWithValue();

		setAuthHeader(token);
		try {
			const res = await axios.get('/users/current');

			return res.data;
		} catch (e) {
			Notiflix.Notify.init({
				timeout: 5000,
			});
			Notiflix.Notify.failure(e.response.data.message);
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
