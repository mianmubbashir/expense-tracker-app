import { Box, Divider, Grid, Paper } from "@mui/material";
import React from "react";

function IncomeExpense() {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={6} pl={3}>
          <h4>Income</h4>
          <p>+$0.00</p>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5} pl={3}>
          <h4>Expense</h4>
          <p>-$0.00</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default IncomeExpense;
