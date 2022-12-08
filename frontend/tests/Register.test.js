import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Testar a página do Registro", () => {
  it('Deve possuir um titulo "Cadastre-se para continuar"', () => {
    render(<App />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
  });

  it('Deve possuir um texto "CPF"', () => {
    render(<App />);
    const textCpf = screen.getByText(/cpf/i);
    expect(textCpf).toBeInTheDocument();
  });

  // it('Deve possuir um botão "Cadastrar"', () => {
  //   render(<App />);
  //   const buttonRegister = screen.getByRole("button", { name: /cadastrar/i });
  //   userEvent.click(buttonRegister);
  // });
});
