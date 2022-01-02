import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import managementAPI from "../../../services/managementAPI";
const initialState = {
  isLoading: false,
  error: null,
};
export const addUser = createAsyncThunk("auth/addUser", async (values) => {
  await managementAPI.addUser(values);
});

const AddUserSlice = createSlice({
  name: "addUser",
  initialState,
  extraReducers: {
    [addUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default AddUserSlice.reducer;
