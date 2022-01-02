import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeAPI from "../../../services/homeAPI";

const initialState = {
  nearbys: [],
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getNearbys = createAsyncThunk(
  "NearbyShowing/getNearbys",
  async () => {
    const data = await homeAPI.getNearby();
    console.log(data);
    return { data };
  }
);

const NearbySlice = createSlice({
  name: "NearbyShowing",
  initialState,
  extraReducers: {
    [getNearbys.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getNearbys.fulfilled]: (state, action) => {
      state.nearbys = action.payload.data;
      state.isLoading = false;
    },
    [getNearbys.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default NearbySlice.reducer;
