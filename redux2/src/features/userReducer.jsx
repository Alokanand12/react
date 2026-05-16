import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "chacha",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("action", action);
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export let { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
