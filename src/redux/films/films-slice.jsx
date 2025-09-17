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
  reducers: {}, // если нужны свои экшены, добавляй сюда
  extraReducers: (builder) => {
    builder
      .addCase(filmOperations.filmPopulerList.pending, (state) => {
        state.isLoggind = false;
        state.isLoader = true;
      })
      .addCase(filmOperations.filmPopulerList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoggind = true;
        state.isLoader = false;
      })
      .addCase(filmOperations.filmFind.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoggind = true;
        state.isLoader = false;
      });
  },
});

export default filmSlice.reducer;
