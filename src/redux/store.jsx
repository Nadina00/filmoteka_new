import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filmReducer from "./films/films-slice";
import genresReducer from "./genres/genres-slice"
import myLibraryReducer from "./mylibrary/MyLibrary-slice"
import WatchedReducer from "./watched/Watched-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const myLibraryPersistConfig = {
  key: "myLibrary",
  storage,
  whitelist: ["items"],
};
const watchedPersistConfig = {
  key: "watched",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    film: filmReducer,
    genres: genresReducer,
    myLibrary: persistReducer(myLibraryPersistConfig, myLibraryReducer),
    watched: persistReducer(watchedPersistConfig, WatchedReducer)

  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);
