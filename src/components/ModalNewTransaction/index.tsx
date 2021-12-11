import React, { useState } from "react";
import Modal from "react-modal";

import { Container, Input, TransactionTypeContainer } from "./styled";
import CloseIcon from "../../assets/close.svg";
import IncomeImage from "../../assets/income.svg";
import OutImage from "../../assets/outcome.svg";

interface ModalNewTransactionProps {
  showOpenModal: boolean;
  setShowOpenModal(state: boolean): void;
}
const ModalNewTransaction: React.FC<ModalNewTransactionProps> = ({
  showOpenModal,
  setShowOpenModal,
}) => {
  const [type, setType] = useState("deposit");
  return (
    <Modal
      isOpen={showOpenModal}
      onRequestClose={() => setShowOpenModal(false)}
      overlayClassName="rect-modal"
      className="modal-content"
    >
      <button
        type="button"
        onClick={() => setShowOpenModal(false)}
        className="button-close-modal"
      >
        <img src={CloseIcon} alt="Fechar" />
      </button>
      <Container>
        <h2>Modal nova transação</h2>
        <Input type="text" placeholder="Titulo" />
        <Input type="number" placeholder="Titulo" />
        <TransactionTypeContainer type={type}>
          <button type="button" onClick={() => setType("deposit")}>
            <img src={IncomeImage} alt="Entrada " />
            <span>Entrada</span>
          </button>
          <button type="button" onClick={() => setType("withDraw")}>
            <img src={OutImage} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <Input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default ModalNewTransaction;
