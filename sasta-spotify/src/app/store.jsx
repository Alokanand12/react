import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../features/songReducer";

export let store = configureStore({
  reducer: {
    music: songsReducer,
  },
});
