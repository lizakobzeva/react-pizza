import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    PopupArray: ["популярности", "цене min", "цене max"],
    popupBool: false,
    popupSortName: "популярности",
    searchValue: "",
    categories: 0,
    categoriesArray: [
      {
        index: 0,
        title: "Все",
      },
      {
        index: 1,
        title: "Мясные",
      },
      {
        index: 2,
        title: "Вегетарианские",
      },
      {
        index: 3,
        title: "Гриль",
      },
      {
        index: 4,
        title: "Острые",
      },
    ],
  },

  reducers: {
    ChangePopupBool: (state, action) => {
      state.popupBool = action.payload;
    },
    ChangePopupSortName: (state, action) => {
      state.popupSortName = action.payload;
    },
    ChangeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    ChangeCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ChangePopupBool,
  ChangePopupSortName,
  ChangeSearchValue,
  ChangeCategories,
} = filterSlice.actions;

export default filterSlice.reducer;
