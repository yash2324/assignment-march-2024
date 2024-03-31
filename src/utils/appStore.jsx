import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataChanges";
import darkReducer from "./darkMode";
const appStore = configureStore({
  reducer: {
    data: dataReducer,
    dark: darkReducer,
  },
});
export default appStore;
