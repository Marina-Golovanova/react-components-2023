import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { RootState } from "../store";

type IUsersState = {
  users: IUser[];
};

const initialState: IUsersState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => ({
      users: state.users.concat(action.payload),
    }),
  },
});

export const { addUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export const usersSliceReducer = userSlice.reducer;
