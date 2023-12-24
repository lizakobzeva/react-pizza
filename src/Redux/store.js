import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slises/filterSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export default store;
