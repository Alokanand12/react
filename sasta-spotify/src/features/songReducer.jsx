import { createSlice } from "@reduxjs/toolkit";

let songsSlice = createSlice({
  name: "song",
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

export let { addSong, play, pause } = songsSlice.actions;
export default songsSlice.reducer;
