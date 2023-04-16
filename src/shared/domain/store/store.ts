import { configureStore } from "@reduxjs/toolkit";
import { searchValueSliceReducer } from "./slices/searchValueSlice";
import { usersSliceReducer } from "./slices/useSlice";

export const store = configureStore({
  reducer: {
    searchValue: searchValueSliceReducer,
    users: usersSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
