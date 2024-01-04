import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzasInCartArray: [],
  },

  reducers: {
    AddPizzaInCartArray(state, action) {
      let counter = true;
      if (state.pizzasInCartArray.length > 0) {
        state.pizzasInCartArray.forEach((item) => {
          if (
            item.index == action.payload.index &&
            item.diameter == action.payload.diameter &&
            item.doughwidth == action.payload.doughwidth &&
            counter
          ) {
            item.price = (item.price / item.count) * (item.count + 1);
            item.count++;
            counter = false;
          }
        });
        if (counter) {
          state.pizzasInCartArray.push(action.payload);
        }
      } else {
        state.pizzasInCartArray.push(action.payload);
      }
      console.log(action.payload.price);
    },

    RemovePizzaInCartArray(state, action) {
      state.pizzasInCartArray.forEach((item) => {
        if (
          item.index == action.payload.index &&
          item.diameter == action.payload.diameter &&
          item.doughwidth == action.payload.doughwidth
        ) {
          state.pizzasInCartArray = state.pizzasInCartArray.filter(
            (obj) => obj != item
          );
        }
      });
    },

    ClearCart(state) {
      state.pizzasInCartArray = [];
    },

    AddPizzasCount(state, action) {
      state.pizzasInCartArray.forEach((item) => {
        if (
          item.index == action.payload.index &&
          item.diameter == action.payload.diameter &&
          item.doughwidth == action.payload.doughwidth
        ) {
          item.count++;
          item.price = item.price + item.count;
        }
      });
    },

    RemovePizzasCount(state, action) {
      state.pizzasInCartArray.forEach((item) => {
        if (
          item.index == action.payload.index &&
          item.diameter == action.payload.diameter &&
          item.doughwidth == action.payload.doughwidth
        ) {
          if (item.count > 1) {
            item.price = (item.price / item.count) * (item.count - 1);
            item.count--;
          } else {
            state.pizzasInCartArray = state.pizzasInCartArray.filter(
              (obj) => obj != item
            );
          }
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  AddPizzaInCartArray,
  RemovePizzaInCartArray,
  ClearCart,
  AddPizzasCount,
  RemovePizzasCount,
} = cartSlice.actions;

export default cartSlice.reducer;
