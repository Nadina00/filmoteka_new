import { createSlice } from "@reduxjs/toolkit";
import watchedOperations from "./Watched-operations";

const initialState = {
  items: [],
  isLoggind: false,
  isLoader: true,
};

const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(watchedOperations.addWatched.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(watchedOperations.addWatched.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoader = false;
      })
      .addCase(watchedOperations.watchedList.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(watchedOperations.watchedList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoader = false;
      })
      .addCase(watchedOperations.watchedDel.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(watchedOperations.fetchCurrentWatched.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoader = false;
      })
      .addCase(watchedOperations.addWatched.rejected, (state) => {
        state.isLoader = false;
      })
      .addCase(watchedOperations.watchedList.rejected, (state) => {
        state.isLoader = false;
      })
      .addCase(watchedOperations.fetchCurrentWatched.rejected, (state) => {
        state.isLoader = false;
      });
  },
});

export default watchedSlice.reducer;
