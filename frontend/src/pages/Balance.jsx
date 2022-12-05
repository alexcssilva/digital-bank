import React from "react";
import { useState } from "react";
import { updateRequest } from "../utils/request";
import NavBar from "../components/NavBar";

function Balance() {
  const [cpf, setCpf] = useState("");
  const [balance, setBalance] = useState("");

  const handleBalance = async () => {
    try {
      const depositValue = await updateRequest("/users/balance", {
        cpf,
        balance,
      });
      if (depositValue) {
        alert(`Valor de R$ ${balance} depositado com sucesso!`);
      }
      return depositValue;
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <form className="container-transfer">
          <header>
            <h2>Deposite valor na sua conta</h2>
          </header>
          <label className="container-transfer" htmlFor="name-deposit">
            Seu CPF:
            <input
              type="text"
              placeholder="CPF"
              min={1}
              maxLength={11}
              onChange={(e) => setCpf(e.target.value)}
            />
          </label>
          <label className="container-transfer" htmlFor="balance">
            Valor do deṕosito:
            <input
              type="number"
              className="balance-input"
              placeholder="Valor do Depósito"
              onChange={(e) => setBalance(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleBalance}>
            Depositar
          </button>
        </form>
      </div>
    </>
  );
}

export default Balance;
