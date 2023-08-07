"use client";
import { addExpenseToHistory } from "@/store/Features/expenseSlice";
import { useAppDispatch } from "@/store/Hooks/hooks";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const AddTransaction: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      category,
      amount: +amount,
    };

    dispatch(addExpenseToHistory(newTransaction));
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <Divider />
      <br />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography>Category</Typography>
        <TextField
          id="my-input"
          label="Enter Category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Typography>
          Amount <br /> (negative - expense, positive - income)
        </Typography>
        <TextField
          id="my-input"
          aria-describedby="my-helper-text"
          variant="outlined"
          label="Enter Amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <form onSubmit={onSubmit}>
          <button className={"btn"} type="submit">
            Add transaction
          </button>
        </form>
      </Box>
    </>
  );
};

export default AddTransaction;
