import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userReducer";

export let store = configureStore({
  reducer: {
    auth: userReducer,
  },
});
