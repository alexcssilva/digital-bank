const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const userService = require("../../../services/userService");
const userController = require("../../../controller/userController");

describe("3 - Verifica se os dados do Usuário estão na Controller", () => {
  const newUser = {
    cpf: "92884402837",
    username: "Theo Duarte",
    balance: 0.0,
  };

  it("será validado se a userCreate cadastrou uma pessoa usuária com sucesso", async () => {
    const res = {};
    const req = { body: newUser };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(userService, "newUser").resolves(newUser);

    await userController.userCreate(req, res);

    expect(res.status).to.have.been.calledWith(201);

    expect(res.json).to.be.been.calledWith({
      message: "Successful user creation",
    });
  });

  it("será validado se a updateBalance depositou um valor no usuário com sucesso", async () => {
    const res = {};
    const req = { body: newUser };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(userService, "depositBalance").resolves(newUser);

    await userController.updateBalance(req, res);

    expect(res.status).to.have.been.calledWith(201);

    expect(res.json).to.be.been.calledWith({
      message: "Updated balance",
    });
  });

  it("será validado se o usuário possui saldo suficiente", async () => {
    const res = {};
    const req = {
      body: { cpfSender: "92884402837", cpf: "38863257841", balance: "200.00" },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(userService, "transferBalance").resolves(newUser);

    await userController.transferValue(req, res);

    expect(res.status).to.have.been.calledWith(400);

    expect(res.json).to.be.been.calledWith({
      message: "Insufficient funds",
    });
  });
});
