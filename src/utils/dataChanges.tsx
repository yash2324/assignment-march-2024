import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  sliderValue: string;
  monthlyBilling: boolean;
}

const initialState: dataState = {
  sliderValue: "50",
  monthlyBilling: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    AddSliderValue: (state, action: PayloadAction<string>) => {
      state.sliderValue = action.payload;
    },
    AddBilling: (state, action: PayloadAction<boolean>) => {
      state.monthlyBilling = action.payload;
    },
  },
});

export const { AddSliderValue, AddBilling } = dataSlice.actions;

export default dataSlice.reducer;
