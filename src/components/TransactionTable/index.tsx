import React, { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

const TransactionTable: React.FC = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>02/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
