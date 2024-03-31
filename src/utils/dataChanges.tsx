import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    sliderValue: 50,
    monthlyBilling: true,
  },
  reducers: {
    AddSliderValue: (state, action) => {
      state.sliderValue = action.payload;
    },
    AddBilling: (state, action) => {
      state.monthlyBilling = action.payload;
    },
  },
});

export const { AddSliderValue, AddBilling } = dataSlice.actions;

export default dataSlice.reducer;
