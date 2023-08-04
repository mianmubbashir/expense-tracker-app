"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";

const AddTransaction: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  return (
    <>
      <h3>Add new transaction</h3>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography>Text</Typography>
        <TextField
          id="my-input"
          label="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Typography>
          Amount <br /> (negative - expense, positive - income)
        </Typography>
        <TextField
          id="my-input"
          aria-describedby="my-helper-text"
          variant="outlined"
          label="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained">Add transaction</Button>
      </Box>
    </>
  );
};

export default AddTransaction;
