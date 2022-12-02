const { getCpf } = require("../services/userService");

const validateUser = async (req, res, next) => {
  const { cpf, username } = req.body;
  const cpfUser = await getCpf(cpf);

  if (cpf.length < 11) {
    return res.status(400).json({ message: "User with invalid CPF" });
  }

  if (username.length < 6) {
    return res.status(400).json({ message: "This field requires a minimum of 6 characters" });
  }

  if (cpfUser) {
    return res.status(409).json({ message: "User already registered" });
  }

  next();
};

module.exports = validateUser;
