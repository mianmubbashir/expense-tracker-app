"use client";
import React from "react";
import { useAppSelector } from "@/store/Hooks/hooks";
import { Divider, Grid, Paper } from "@mui/material";

function IncomeExpense() {
  const transactions = useAppSelector((state) => state.expenses.Transaction);

  // Calculate income and expense amounts separately
  const incomeAmount = transactions
    .reduce((acc, item) => (item.amount > 0 ? acc + item.amount : acc), 0)
    .toFixed(2);
  const expenseAmount = transactions
    .reduce((acc, item) => (item.amount < 0 ? acc + item.amount : acc), 0)
    .toFixed(2);

  return (
    <Paper>
      <Grid container>
        <Grid item xs={6} pl={3}>
          <h4>INCOME</h4>
          <p className={"mplus"}>+${incomeAmount}</p>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5} pl={3}>
          <h4>EXPENSE</h4>
          <p className={"mminus"}>-${Math.abs(Number(expenseAmount))}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default IncomeExpense;
