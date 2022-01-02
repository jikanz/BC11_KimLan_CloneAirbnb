import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../services/authAPI";
const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  currentUser,
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const login = createAsyncThunk("auth/login", async (values) => {
  const data = await authAPI.login(values);
  localStorage.setItem("user", JSON.stringify(data));
  return { data };
});

const LoginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data;
      state.isLoading = false;
    },
    [login.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default LoginSlice.reducer;
