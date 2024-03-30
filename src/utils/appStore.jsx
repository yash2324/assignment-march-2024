import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataChanges";

const appStore = configureStore({
  reducer: {
    data: dataReducer,
  },
});
export default appStore;
