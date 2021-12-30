import React, { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";

import {
  Container,
  Input,
  TransactionTypeContainer,
  RadioButton,
} from "./styled";
import CloseIcon from "../../assets/close.svg";
import IncomeImage from "../../assets/income.svg";
import OutImage from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactionsContext";

interface ModalNewTransactionProps {
  showOpenModal: boolean;
  setShowOpenModal(state: boolean): void;
}
const ModalNewTransaction: React.FC<ModalNewTransactionProps> = ({
  showOpenModal,
  setShowOpenModal,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");
  const { createTransaction } = useTransactions();

  const reset = () => {
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
  };
  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    reset();
    setShowOpenModal(false);
  };
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Modal nova transação</h2>
        <Input
          type="text"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Titulo"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioButton
            isActive={type === "deposit"}
            activeColor="green"
            type="button"
            onClick={() => setType("deposit")}
          >
            <img src={IncomeImage} alt="Entrada " />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            isActive={type === "withDraw"}
            activeColor="red"
            type="button"
            onClick={() => setType("withDraw")}
          >
            <img src={OutImage} alt="Saída" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>
        <Input
          type="text"
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default ModalNewTransaction;
