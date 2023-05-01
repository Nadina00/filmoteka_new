import { createSlice } from "@reduxjs/toolkit";
import filmOperations from "./films-operations";

const initialState = {
  items: [],
  isLoggind: false,
  isLoader: true,
  isOpen: false,
  genres: [],
  findFilm: []
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  extraReducers: {
    [filmOperations.filmPopulerList.pending]: (state, action) => {
      state.isLoggind = false;
      state.isLoader = true;
    },
    [filmOperations.filmPopulerList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoggind = true;
      state.isLoader = false;
    },
    [filmOperations.filmFind.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoggind = true;
      state.isLoader = false;
    },
  },
});

export default filmSlice.reducer;
