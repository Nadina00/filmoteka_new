//import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addMyLibrary = createAsyncThunk(
  "myLibrary/addMyLibrary",
  async (data) => {
    try {
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
const myLibraryList = createAsyncThunk("myLibrary/myLibraryList", async (credentials) => {
  console.log(credentials)
      try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
});
const myLibraryDel = createAsyncThunk("myLibrary/myLibraryDel", async (credentials) => {
  console.log(credentials)
      try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
});

const fetchCurrentItems = createAsyncThunk(
  "myLibrary/fetchCurrent",
  async (items, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedItems = state.items;
    if (persistedItems === null) {
      return thunkAPI.rejectWithValue();
    }
    items(persistedItems);
    try {
      const { data } = await axios.get("/current");
      console.log(data);
      return { data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


const myLibraryOperations = {
  addMyLibrary,
  myLibraryList,
  myLibraryDel,
  fetchCurrentItems
};

export default myLibraryOperations;
