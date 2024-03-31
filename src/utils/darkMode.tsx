import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pageTheme {
  theme: "light" | "dark";
}

const initialState: pageTheme = {
  theme: "light",
};

export const darkSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    ChangeMode: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { ChangeMode } = darkSlice.actions;

export default darkSlice.reducer;
