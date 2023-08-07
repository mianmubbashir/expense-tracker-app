"use client";
import { useAppSelector } from "@/store/Hooks/hooks";
import { Box, Typography } from "@mui/material";
import React from "react";

function Balance() {
  const transactions = useAppSelector((state) => state.expenses.Transaction);
  const amount = transactions.map((item) => item.amount);
  const totalAmount = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" component="h4">
        YOUR BALANCE
      </Typography>
      <Typography variant="h4" component="h1" sx={{ mt: -1, mb: 2 }}>
        ${totalAmount}
      </Typography>
    </Box>
  );
}

export default Balance;
