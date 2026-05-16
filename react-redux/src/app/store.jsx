import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterReducer";

export let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
