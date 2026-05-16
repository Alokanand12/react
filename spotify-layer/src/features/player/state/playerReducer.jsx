import { createSlice } from "@reduxjs/toolkit";

export let playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    isPlaying: false,
  },
  reducers: {
    addSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
  },
});

export let { addSong, play, pause } = playerSlice.actions;

// export default playerSlice.reducer;
