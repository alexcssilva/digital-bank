import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Testar a página do Saldo", () => {
  it('Deve possuir um titulo "Deposite valor na sua conta"', () => {
    render(<App />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
  });

  it('Deve possuir um texto "Seu CPF"', () => {
    render(<App />);
    const textCpf = screen.getByText(/seu cpf:/i);
    expect(textCpf).toBeInTheDocument();
  });

  it('Deve possuir um texto "Valor do depósito"', () => {
    render(<App />);
    const textCpf = screen.getByText(/valor do deṕosito:/i);
    expect(textCpf).toBeInTheDocument();
  });

  it('Deve possuir um botão "Depositar"', () => {
    render(<App />);
    const buttonBalance = screen.getByRole("button", { name: /depositar/i });
    userEvent.click(buttonBalance);
  });
});
