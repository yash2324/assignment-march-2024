import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    pageview: 3,
  },
  reducers: {
    AddPageView: (state, action) => {
      state.pageview = action.payload;
    },
  },
});

export const { AddPageView } = dataSlice.actions;

export default dataSlice.reducer;
