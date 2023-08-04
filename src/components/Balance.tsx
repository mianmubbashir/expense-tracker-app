import { Box, Typography } from "@mui/material";
import React from "react";

function Balance() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" component="h4">
        Your Balance
      </Typography>
      <Typography variant="h4" component="h1" sx={{ mt: -1, mb: 2 }}>
        $0.00
      </Typography>
    </Box>
  );
}

export default Balance;
