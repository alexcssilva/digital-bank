import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Testar a página do usuário", () => {
  it("Deve possuir um titulo .", () => {
    render(<App />);
    // acessar os elementos da tela

    const title = screen.getByRole('heading', {  name: /cadastre-se para continuar/i})
    // interagir com os elementos (se for necessário)
    expect(title).toBeInTheDocument();
    // fazer os teste
  });
});
