import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import managementAPI from "../../../services/managementAPI";

const initialState = {
  locations: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getViTris = createAsyncThunk("getViTri/viTri", async () => {
  const data = await managementAPI.getViTri();
  console.log(data);
  return { data };
});
export const deleteViTri = createAsyncThunk("delete/viTri", async (id) => {
  await managementAPI.deleteViTri(id);
  alert("thành công");
});

const UserSlice = createSlice({
  name: "getViTri",
  initialState,
  extraReducers: {
    [getViTris.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getViTris.fulfilled]: (state, action) => {
      state.locations = action.payload.data;
      state.isLoading = false;
    },
    [getViTris.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default UserSlice.reducer;
