import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//initial state type
export type InitialStateTypes = {
  Transaction: TransactionTypes[];
};

// transaction Type
export type TransactionTypes = {
  id: number;
  category: string;
  amount: number;
};

const initailState: InitialStateTypes = {
  Transaction: [{ id: 1, category: "Cash", amount: 200 }],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initailState,
  reducers: {
    addExpenseToHistory: (state, action: PayloadAction<TransactionTypes>) => {
      state.Transaction.unshift(action.payload);
    },
    deleteExpenseFromHistory: (state, action: PayloadAction<number>) => {
      state.Transaction = state.Transaction.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const { addExpenseToHistory, deleteExpenseFromHistory } =
  expenseSlice.actions;
export default expenseSlice.reducer;
