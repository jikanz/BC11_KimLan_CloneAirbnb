import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../services/authAPI";
const initialState = {
  isLoading: false,
  error: null,
};
export const register = createAsyncThunk("auth/register", async (values) => {
  await authAPI.register(values);
});

const RegisterSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default RegisterSlice.reducer;
