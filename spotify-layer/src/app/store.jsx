import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "../features/player/state/playerReducer";

export let store = configureStore({
  reducer: {
    player: playerSlice.reducer,
  },
});
