import { createSlice } from "@reduxjs/toolkit";
import myLibraryOperations from "./MyLibrary-operations";

const initialState = {
  items: [],
  isLoggind: false,
  isLoader: true,
};

const myLibrarySlice = createSlice({
  name: "myLibrary",
  initialState,
  extraReducers: {
    [myLibraryOperations.addMyLibrary.pending]: (state, action) => {
      state.isLoader = true;
    },
    [myLibraryOperations.addMyLibrary.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoader = false;
    },
    [myLibraryOperations.myLibraryList.pending]: (state, action) => {
      state.isLoader = true;
    },
    [myLibraryOperations.myLibraryList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoader = false;
    },
    [myLibraryOperations.myLibraryDel.fulfilled]: (state, action) => {
      const index = state.items.filter(item => item.id !== action.payload);
      state.items = index; 
    },
    [myLibraryOperations.fetchCurrentItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoader = false;
    },
  },
});

export default myLibrarySlice.reducer;
