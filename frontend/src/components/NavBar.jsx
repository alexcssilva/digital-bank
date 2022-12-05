import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="nav-container">
      <div
        className="button-nav"
        type="button"
        onClick={() => navigate("/users/register")}
      >
        Usuário
      </div>
      <div
        className="button-nav"
        type="button"
        onClick={() => navigate("/users/balance")}
      >
        Depositar na sua Conta
      </div>
      <div
        className="button-nav"
        type="button"
        onClick={() => navigate("/users/transfer")}
      >
        Transferir para outra Conta
      </div>
    </nav>
  );
}

export default NavBar;
