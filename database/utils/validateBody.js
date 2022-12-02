const validateBody = async (req, res, next) => {
  const { cpf, username } = req.body;

  if (!cpf || !username) {
    return res
      .status(400)
      .json({ message: "Some required fields are missing" });
  }

  if (cpf.length < 11) {
    return res.status(400).json({ message: "Invalid CPF" });
  }

  next();
};

module.exports = validateBody;
