import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", async () => {
  // const { datapizzasArray } = await axios.get("http://localhost:3001/pizza");
  let res = await fetch("http://localhost:3001/pizza", { method: "get" });
  let json = await res.json();
  return json;
});

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzasArray: [],
    isLoading: true,
    status: "loading",
  },

  reducers: {
    ChangePizzasArray: (state, action) => {
      state.pizzasArray = action.payload;
    },
    ChangeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.pizzasArray = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzasArray = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.pizzasArray = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { ChangePizzasArray, ChangeIsLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
