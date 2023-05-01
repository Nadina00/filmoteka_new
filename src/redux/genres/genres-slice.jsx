import { createSlice } from "@reduxjs/toolkit";
import genresOperations from "./genres-operations";

const initialState = {
    genres: [],
    isLoader: false
   
  };
  
  const genresSlice = createSlice({
    name: "genres",
    initialState,
    extraReducers: {
      [genresOperations.genresList.pending]: (state, action) => {
        state.isLoader = true;
      },
      [genresOperations.genresList.fulfilled]: (state, action) => {
        state.genres = action.payload;
        state.isLoader = false
      },
    },
});

export default genresSlice.reducer;