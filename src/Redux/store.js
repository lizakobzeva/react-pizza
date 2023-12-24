import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slises/filterSlice";
import pizzasSlice from "./Slises/pizzasSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    pizzas: pizzasSlice,
  },
});

export default store;
