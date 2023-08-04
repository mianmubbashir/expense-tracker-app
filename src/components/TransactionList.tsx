import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

function TransactionList() {
  const expenses = useSelector((state) => state.expense.expenseHistory);
  return (
    <>
      <h3>History</h3>
      <Divider />
      <ul>
        {expenses.map((item, index) => {
          <li>{item.expenseName}</li>;
        })}
      </ul>
    </>
  );
}

export default TransactionList;
