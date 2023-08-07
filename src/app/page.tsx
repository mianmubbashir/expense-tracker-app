import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Header from "@/components/Header";
import IncomeExpense from "@/components/IncomeExpenses";
import TransactionList from "@/components/TransactionList";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <Box>
        <Header />
        <Container>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </Container>
      </Box>
    </Box>
  );
}
