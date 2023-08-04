import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExpenseState {
  balance: number;
  expense: number;
  income: number;
  expenseHistory: {
    expenseNAme: string;
    amount: number;
  }[];
}

export interface IExpense {
  expenseName: string;
  amount: number | string;
}

const initialState: ExpenseState = {
  balance: 0,
  expense: 0,
  income: 0,
  expenseHistory: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenseToHistory: (state, action: PayloadAction<IExpense>) => {},
  },
});
