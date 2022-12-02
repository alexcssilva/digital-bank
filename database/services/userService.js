const { User } = require("../models");

const newUser = async ({ cpf, username }) => {
  const balance = 0.0;
  const user = await User.create({ cpf, username, balance });

  return user;
};

const getCpf = async (cpf) => {
  const user = await User.findOne({ where: { cpf } });

  return user;
};

const depositBalance = async (cpf, balance) => {
  const user = await getCpf(cpf);
  const userBalance = Number(user.balance) + Number(balance);
  return await User.update({ balance: userBalance }, { where: { cpf } });
};

const transferBalance = async (cpfSender, cpf, balance) => {
  const userSend = await getCpf(cpfSender);
  const senderBalance = Number(userSend.balance) - Number(balance);
  await User.update({ balance: senderBalance }, { where: { cpf: cpfSender } });

  const userRecip = await getCpf(cpf);
  const recipientBalance = Number(userRecip.balance) + Number(balance);
  const userRecipient = await User.update(
    { balance: recipientBalance },
    { where: { cpf } }
  );

  return userRecipient;
};

module.exports = {
  newUser,
  getCpf,
  depositBalance,
  transferBalance,
};
