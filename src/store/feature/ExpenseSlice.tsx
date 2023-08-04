import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExpenseState {
  balance: number;
  expense: number;
  income: number;
  expenseHistory: {
    expenseName: string;
    amount: number | string;
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

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenseToHistory: (state, action: PayloadAction<IExpense>) => {
      state.expenseHistory.unshift(action.payload);
    },
    deleteExpenseFromHistory: (state, action: PayloadAction<string>) => {
      state.expenseHistory = state.expenseHistory.filter(
        (transaction) => transaction.expenseName !== action.payload
      );
    },
  },
});

export const { addExpenseToHistory, deleteExpenseFromHistory } =
  expenseSlice.actions;
export default expenseSlice.reducer;
