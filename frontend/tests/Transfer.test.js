import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Testar a página do Transferência", () => {
  it('Deve possuir um titulo "Transfira valor para outra conta"', () => {
    render(<App />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
  });
});
