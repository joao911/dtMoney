import React from "react";
import IconImage from "../../assets/income.svg";
import IconOutcome from "../../assets/outcome.svg";
import IconTotal from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactionsContext";

import { Card, Container, Header, Strong } from "./styles";

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { deposits: 0, withdraws: 0, total: 0 }
  );

  const numberFormatted = (value: number) => {
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return value;
  };
  return (
    <Container>
      <Card>
        <Header>
          <p>Entradas</p>
          <img src={IconImage} alt="Entradas" />
        </Header>
        <Strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </Strong>
      </Card>
      <Card>
        <Header>
          <p>Saídas</p>
          <img src={IconOutcome} alt="Saídas" />
        </Header>
        <Strong>
          {" "}
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </Strong>
      </Card>
      <Card isHighlight>
        <Header>
          <p>Total</p>
          <img src={IconTotal} alt="Entradas" />
        </Header>
        <Strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </Strong>
      </Card>
    </Container>
  );
};

export default Summary;
