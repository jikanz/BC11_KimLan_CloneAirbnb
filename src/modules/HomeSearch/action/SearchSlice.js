import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeAPI from "../../../services/homeAPI";

const initialState = {
  searchs: {},
  isLoading: false,
  error: null,
};

// Tạo action thông qua createAsyncThunk
export const getSearchs = createAsyncThunk(
  "searchShowing/getSearchs",
  async () => {
    const data = await homeAPI.getSearch();
    // const data2 = data.filter((item) => item.locationId?.province === id);
    console.log(data.filter((item) => item.locationId?.province === "Cần Thơ"));
    console.log(data);
    return { data };
  }
);

const SearchSlice = createSlice({
  name: "searchShowing",
  initialState,
  extraReducers: {
    [getSearchs.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getSearchs.fulfilled]: (state, action) => {
      state.searchs = action.payload.data;
      state.isLoading = false;
    },
    [getSearchs.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default SearchSlice.reducer;
