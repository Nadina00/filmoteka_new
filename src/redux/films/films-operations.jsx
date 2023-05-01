import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const APP_KEY = process.env.REACT_APP_KEY;

const filmPopulerList = createAsyncThunk(
  "film/filmPopulerList",
  async (page) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${APP_KEY}&page=${page}`
      );

      return data.results;
    } catch (error) {
      console.error(error);
    }
  }
);

const filmFind = createAsyncThunk("film/filmFind", async (guary) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${guary}&language=en-US&include_adult=false`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
});

const filmOperations = {
  filmPopulerList,
  filmFind,
};

export default filmOperations;
