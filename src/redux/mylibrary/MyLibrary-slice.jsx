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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myLibraryOperations.addMyLibrary.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(myLibraryOperations.addMyLibrary.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoader = false;
      })
      .addCase(myLibraryOperations.myLibraryList.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(myLibraryOperations.myLibraryList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoader = false;
      })
      .addCase(myLibraryOperations.myLibraryDel.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(myLibraryOperations.fetchCurrentItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoader = false;
      });
  },
});

export default myLibrarySlice.reducer;
