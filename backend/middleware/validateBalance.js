const { getCpf } = require("../services/userService");

const validateBalance = async (cpf, value) => {
  const { balance } = await getCpf(cpf);

  if (balance >= value) {
    return true;
  } else {
    return false;
  }
};

module.exports = validateBalance;
