import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import managementAPI from "../../../services/managementAPI";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getUsers = createAsyncThunk("getUser/user", async () => {
  const data = await managementAPI.getList();
  console.log(data);
  return { data };
});
export const deleteUser = createAsyncThunk(
  "getUser/user",
  async (id, dispatch) => {
    await managementAPI.deleteUser(id);
    dispatch(getUsers());
    alert("sucess");
  }
);

const UserSlice = createSlice({
  name: "getUser",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload.data;
      state.isLoading = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default UserSlice.reducer;
