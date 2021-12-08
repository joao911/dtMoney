import React from "react";
import IconImage from "../../assets/income.svg";
import IconOutcome from "../../assets/outcome.svg";
import IconTotal from "../../assets/total.svg";

import { Card, Container, Header, Strong } from "./styles";

// import { Container } from './styles';

const Summary: React.FC = () => {
  return (
    <Container>
      <Card>
        <Header>
          <p>Entradas</p>
          <img src={IconImage} alt="Entradas" />
        </Header>
        <Strong>R$ 1000,00</Strong>
      </Card>
      <Card>
        <Header>
          <p>Saídas</p>
          <img src={IconOutcome} alt="Saídas" />
        </Header>
        <Strong>R$ 1000,00</Strong>
      </Card>
      <Card isHighlight>
        <Header>
          <p>Total</p>
          <img src={IconTotal} alt="Entradas" />
        </Header>
        <Strong>R$ 1000,00</Strong>
      </Card>
    </Container>
  );
};

export default Summary;
