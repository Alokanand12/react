import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "count",
  initialState: {
    count: 20,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export default counterSlice.reducer