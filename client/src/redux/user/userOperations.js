import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://localhost:3001";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.token;

    if (!token) return thunkAPI.rejectWithValue();

    setAuthHeader(token);
    try {
      const res = await axios.get("/users/current");

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
