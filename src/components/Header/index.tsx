import React, { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import ModalNewTransaction from "../ModalNewTransaction";
import { Container, Content } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Header() {
  const [showOpenModal, setShowOpenModal] = useState(false);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={() => setShowOpenModal(true)}>
          Nova transação
        </button>
      </Content>
      {showOpenModal && (
        <ModalNewTransaction
          showOpenModal={showOpenModal}
          setShowOpenModal={setShowOpenModal}
        />
      )}
    </Container>
  );
}
