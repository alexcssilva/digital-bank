import React from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { updateRequest } from "../utils/request";

function Transfer() {
  const [cpfSender, setCpfSender] = useState("");
  const [cpf, setCpf] = useState("");
  const [balance, setBalance] = useState("");

  const validateTransfer = () => {
    const TWOTHOUSAND = 2000;

    if (!cpfSender || !cpf || !balance) {
      alert("Preencha todos os campos!");
    } else if (balance >= TWOTHOUSAND) {
      alert("Não é permitido transferência acima de R$2.000,00");
    }
  };

  const handleTransfer = async (event) => {
    event.preventDefault();
    validateTransfer();
    try {
      const depositValue = await updateRequest("/users/transfer", {
        cpfSender,
        cpf,
        balance,
      });
      if (depositValue) {
        alert(`Valor de R$ ${balance} transferido com sucesso!`);
      }
      return depositValue;
    } catch (error) {}
    return 1;
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <form className="container-transfer">
          <header>
            <h2>Transfira valor para outra conta</h2>
          </header>
          <label className="container-transfer" htmlFor="cpf-sender">
            CPF Remetente:
            <input
              type="text"
              placeholder="CPF"
              maxLength={11}
              onChange={(e) => setCpfSender(e.target.value)}
            />
          </label>
          <label className="container-transfer" htmlFor="cpf-destiny">
            CPF Destinatário:
            <input
              type="text"
              placeholder="CPF"
              maxLength={11}
              onChange={(e) => setCpf(e.target.value)}
            />
          </label>
          <label className="container-transfer" htmlFor="transfer">
            Valor da Transferência:
            <input
              type="number"
              className="transfer-input"
              placeholder="Valor do Depósito"
              min={1}
              onChange={(e) => setBalance(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleTransfer}>
            Transferir valor
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
