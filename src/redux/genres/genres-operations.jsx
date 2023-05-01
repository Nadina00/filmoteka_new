import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const APP_KEY = process.env.REACT_APP_KEY

const genresList = createAsyncThunk("film/genresList", async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${APP_KEY}&language=en-US`
    );
      return data.genres;
  } catch (error) {
    console.error(error);
  }
});

const genresOperations = {
  genresList,
};

export default genresOperations;
