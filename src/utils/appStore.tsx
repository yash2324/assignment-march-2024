import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataChanges";
import darkReducer from "./darkMode";
const appStore = configureStore({
  reducer: {
    data: dataReducer,
    theme: darkReducer,
  },
});
export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
