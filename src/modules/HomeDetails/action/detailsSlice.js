// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import homeAPI from "../../../services/homeAPI";

// const initialState = {
//   details: {},
//   isLoading: false,
//   error: null,
// };

// // Tạo action thông qua createAsyncThunk
// export const getDetails = createAsyncThunk(
//   "detailShowing/getDetails",
//   async (name) => {
//     const data = await homeAPI.getDetail(name);
//     console.log(data);
//     return { data };
//   }
// );

// const DetailSlice = createSlice({
//   name: "detailShowing",
//   initialState,
//   extraReducers: {
//     [getDetails.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getDetails.fulfilled]: (state, action) => {
//       state.details = action.payload.data;
//       state.isLoading = false;
//     },
//     [getDetails.rejected]: (state, action) => {
//       state.error = action.error.message;
//       state.isLoading = false;
//     },
//   },
// });
// export default DetailSlice.reducer;
