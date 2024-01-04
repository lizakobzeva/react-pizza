import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slises/filterSlice";
import pizzasSlice from "./Slises/pizzasSlice";
import cartSlice from "./Slises/cartSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    pizzas: pizzasSlice,
    cart: cartSlice,
  },
});

export default store;
