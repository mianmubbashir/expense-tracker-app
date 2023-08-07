import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "./Features/expenseSlice";

export const store = configureStore({
  reducer: {
    expenses: ExpenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
