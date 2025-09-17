import { createSlice } from "@reduxjs/toolkit";
import genresOperations from "./genres-operations";

const initialState = {
  genres: [],
  isLoader: false
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {}, // если свои экшены не нужны — можно оставить пустым
  extraReducers: (builder) => {
    builder
      .addCase(genresOperations.genresList.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(genresOperations.genresList.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.isLoader = false;
      })
      .addCase(genresOperations.genresList.rejected, (state) => {
        state.isLoader = false;
      });
  },
});

export default genresSlice.reducer;
