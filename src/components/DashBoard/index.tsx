import React from "react";
import Summary from "../Summary";
import TransactionTable from "../TransactionTable";

import { Container } from "./styles";

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};

export default DashBoard;
