import React, { useEffect, useState } from "react";
import { map } from "lodash";

import { api } from "../../services/api";
import { Container, Amount } from "./styles";

interface transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}
const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<transaction[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {map(transactions, (item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <Amount isWithDrown={item.type === "withdraw"}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.amount)}
              </Amount>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(item.createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
