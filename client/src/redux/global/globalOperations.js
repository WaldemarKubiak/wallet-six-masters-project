// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import Notiflix from "notiflix";

// axios.defaults.baseURL = "https://wallet-project-4dhb.onrender.com/api";

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

// export const postTransactions = createAsyncThunk(
//   "transactions/postTransactions",
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post("/transactions", credentials);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (e) {
//       Notiflix.Notify.init({
//         timeout: 5000,
//       });
//       Notiflix.Notify.failure(e.response.data.message);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );
