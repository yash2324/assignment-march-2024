import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    ChangeMode: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { ChangeMode } = darkSlice.actions;

export default darkSlice.reducer;
