import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { searchValueSliceReducer } from "./slices/searchValueSlice";
import { usersSliceReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    searchValue: searchValueSliceReducer,
    users: usersSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
