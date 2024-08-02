import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
