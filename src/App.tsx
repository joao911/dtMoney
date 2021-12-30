import React from "react";

import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactionsContext";

function App() {
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header />
      <DashBoard />
    </TransactionsProvider>
  );
}

export default App;
