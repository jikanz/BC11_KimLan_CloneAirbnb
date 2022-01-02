import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import managementAPI from "../../../services/managementAPI";
const initialState = {
  isLoading: false,
  error: null,
};
export const addViTri = createAsyncThunk("auth/addViTri", async (values) => {
  await managementAPI.addViTri(values);
});

// export const addViTri = (values) => {
//   return async (dispatch) => {
//     await managementAPI.addViTri(values);
//   };
// };
const AddViTriSlice = createSlice({
  name: "addViTri",
  initialState,
  extraReducers: {
    [addViTri.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addViTri.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default AddViTriSlice.reducer;
