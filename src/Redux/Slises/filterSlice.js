import { createSlice } from "@reduxjs/toolkit";
const PopupArray = ["популярности", "цене min", "цене max"];

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    popupBool: false,
    popupSortName: PopupArray[0],
    searchValue: "",
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
  },
});

// Action creators are generated for each case reducer function
export const { ChangePopupBool, ChangePopupSortName, ChangeSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
