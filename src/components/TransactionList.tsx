"use client";
import { Divider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks";
import { deleteExpenseFromHistory } from "@/store/Features/expenseSlice";

function TransactionList() {
  const expense = useAppSelector((state) => state.expenses.Transaction);
  const dispatch = useAppDispatch();

  // const sign = trans.amount < 0 ? "-" : "+";

  return (
    <>
      <h3>History</h3>
      <Divider />
      <ul className="list">
        {expense.map((item: any, index: number) => (
          <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
            {item.category}
            <span>PKR{Math.abs(item.amount)}</span>
            <button
              onClick={() => dispatch(deleteExpenseFromHistory(item.id))}
              className={`delete-btn ${
                item.amount < 0 ? "del-red" : "del-green"
              }`}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
