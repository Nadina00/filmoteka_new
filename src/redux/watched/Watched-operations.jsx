//import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addWatched = createAsyncThunk("watched/addWatched", async (data) => {
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
});
const watchedList = createAsyncThunk(
  "watched/watchedList",
  async (credentials) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);
const watchedDel = createAsyncThunk(
  "watched/watchedDel",
  async (credentials) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);

const fetchCurrentWatched = createAsyncThunk(
  "watched/fetchCurrent",
  async (items, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedItems = state.items;
    if (persistedItems === null) {
      return thunkAPI.rejectWithValue();
    }
    items(persistedItems);
    try {
      const { data } = await axios.get("/current");
      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const watchedOperations = {
  addWatched,
  watchedList,
  watchedDel,
  fetchCurrentWatched,
};

export default watchedOperations;
