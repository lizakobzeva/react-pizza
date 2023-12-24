import { createSlice } from "@reduxjs/toolkit";

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzasArray: [],
    isLoading: true,
  },

  reducers: {
    ChangePizzasArray: (state, action) => {
      state.pizzasArray = action.payload;
    },
    ChangeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ChangePizzasArray, ChangeIsLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
