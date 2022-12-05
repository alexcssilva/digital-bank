import React, { useState, useEffect } from "react";
import { postRequest } from "../utils/request";
import { useNavigate } from "react-router-dom";

function Register() {
  const [cpf, setCpf] = useState("");
  const [username, setUsername] = useState("");
  const [isDisable, setDisable] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const CPF_MIN_LENGTH = 11;
  const NAME_MIN_LENGTH = 6;
  const CpfValidate = cpf.length >= CPF_MIN_LENGTH;
  const validateName = username.length >= NAME_MIN_LENGTH;

  const navigate = useNavigate();

  const disabled = () => {
    if (CpfValidate && validateName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await postRequest("/users/register", { cpf, username });

      localStorage.setItem("user", JSON.stringify({ cpf, username }));
      navigate("/users/balance");
    } catch (error) {
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    disabled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpf, username]);

  return (
    <div className="container">
      <form className="container-transfer">
        <header>
          <h2>Cadastre-se para continuar</h2>
        </header>
        <label className="container-transfer" htmlFor="cpf">
          CPF
          <input
            type="text"
            className="cpf-input"
            placeholder="Seu CPF"
            maxLength={11}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>

        <label className="container-transfer" htmlFor="username">
          Nome
          <input
            type="text"
            className="username-input"
            placeholder="Digite seu nome e sobrenome"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        {/* {invalidProperties ? <p>Revise dados e tente novamente</p> : null} */}

        <button type="button" disabled={isDisable} onClick={handleRegister}>
          Cadastrar
        </button>
        {errorMsg && <p>CPF de Usuário já existente</p>}
      </form>
    </div>
  );
}

export default Register;
