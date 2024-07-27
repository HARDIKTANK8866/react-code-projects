import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Define the type for the root state
export type RootState = ReturnType<typeof store.getState>;

// Define the type for the dispatch function
export type AppDispatch = typeof store.dispatch;
