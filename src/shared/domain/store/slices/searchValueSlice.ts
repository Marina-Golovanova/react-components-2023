import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ISearchValueState = {
  value: string;
};

const initialState: ISearchValueState = {
  value: "",
};

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => ({
      value: action.payload,
    }),
  },
});

export const { changeSearchValue } = searchValueSlice.actions;

export const selectSearchValue = (state: RootState) => state.searchValue.value;

export const searchValueSliceReducer = searchValueSlice.reducer;
