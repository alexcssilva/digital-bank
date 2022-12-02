const { getCpf } = require("../services/userService");

const validateUser = async (req, res, next) => {
  const { cpf } = req.body;
  const cpfUser = await getCpf(cpf);

  if (cpf.length < 11) {
  }

  if (cpfUser) {
    return res.status(409).json({ message: "User already registered" });
  }

  next();
};

module.exports = validateUser;
