const validateBalance = require("../middleware/validateBalance");
const {
  newUser,
  transferBalance,
  depositBalance,
} = require("../services/userService");

const userCreate = async (req, res) => {
  await newUser(req.body);
  return res.status(201).json({ message: "Successful user creation" });
};

const updateBalance = async (req, res) => {
  const { cpf, balance } = req.body;
  await depositBalance(cpf, balance);

  return res.status(201).json({ message: "Updated balance" });
};

const transferValue = async (req, res) => {
  const { cpfSender, cpf, balance } = req.body;

  const verifyBalance = await validateBalance(cpfSender, balance);

  if (balance > 2000) {
    return res.status(201).json({ message: "Value above allowed" });
  } else if (verifyBalance === true) {
    await transferBalance(cpfSender, cpf, balance);
    return res.status(201).json({ message: "Successful transfer" });
  } else {
    return res.status(400).json({ message: "Insufficient funds" });
  }
};

module.exports = {
  userCreate,
  updateBalance,
  transferValue,
};
