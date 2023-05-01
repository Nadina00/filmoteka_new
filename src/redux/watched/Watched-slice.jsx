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
  extraReducers: {
    [watchedOperations.addWatched.pending]: (state, action) => {
      state.isLoader = true;
    },
    [watchedOperations.addWatched.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoader = false;
    },
    [watchedOperations.watchedList.pending]: (state, action) => {
      state.isLoader = true;
    },
    [watchedOperations.watchedList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoader = false;
    },
    [watchedOperations.watchedDel.fulfilled]: (state, action) => {  
       const index = state.items.filter(item => item.id !== action.payload);
       state.items = index;      
    },
    [watchedOperations.fetchCurrentWatched.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoader = false;
    },
  },
});

export default watchedSlice.reducer;
