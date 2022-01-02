import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../services/authAPI";
const initialState = {
  isLoading: false,
  error: null,
};
export const postAvatarUser = createAsyncThunk(
  "update/avatar",
  async (values) => {
    await authAPI.postAvatarUser(values);
  }
);

const AvatarSlice = createSlice({
  name: "avatar",
  initialState,
  extraReducers: {
    [postAvatarUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postAvatarUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default AvatarSlice.reducer;
