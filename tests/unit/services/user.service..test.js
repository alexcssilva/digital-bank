require("dotenv").config();
const sinon = require("sinon");

const { apiURL: url } = require("../../assets/constants");
const userService = require("../../../database/services/userService");
const { User } = require("../../../database/models");

describe("1 - Verifica às variáveis de ambiente", () => {
  it("Será validado que a variável da PORT existe", () => {
    expect(url).toBeDefined();
  });
});

describe("2 - Verifica se os dados do Usuário estão na Service", () => {
  const newUser = {
    cpf: "92884402837",
    username: "Theo Duarte",
    balance: 0.0,
  };

  it("será validado se a newUser cadastrou uma pessoa usuária com sucesso", async () => {
    sinon.stub(User, "create").resolves(newUser);
    const user = await userService.newUser({
      cpf: newUser.cpf,
      username: newUser.username,
    });
    expect(user).toBe(newUser);
  });

  it("será validado se a getCpf busca o CPF corretamente", async () => {
    sinon.stub(User, "findOne").resolves(newUser);
    const user = await userService.getCpf({
      cpf: newUser.cpf,
    });
    expect(user).toBe(newUser);
  });

  it("será validado se a depositBalance atualiza o Saldo corretamente", async () => {
    sinon.stub(User, "findOne").resolves(newUser);
    sinon.stub(User, "update").resolves(newUser);
    const user = await userService.depositBalance({
      cpf: newUser.cpf,
      balance: newUser.balance,
    });
    expect(user).toBe(newUser);
  });

  it("será validado se a transferBalance transfere o Saldo corretamente", async () => {
    sinon.stub(User, "findOne").resolves(newUser);
    sinon.stub(User, "update").resolves(newUser);
    const user = await userService.transferBalance(
      newUser.cpf,
      newUser.cpf,
      newUser.balance
    );
    expect(user).toBe(newUser);
  });

  afterEach(function () {
    sinon.restore();
  });
});
