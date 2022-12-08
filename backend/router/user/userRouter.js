const express = require("express");
const userController = require("../../controller/userController");
const validateBody = require("../../utils/validateBody");
const validateUser = require("../../utils/validateUser");

const userRouter = express.Router();

userRouter.get("/");

userRouter.post(
  "/register",
  validateBody,
  validateUser,
  userController.userCreate
);

userRouter.put("/balance", userController.updateBalance);

userRouter.put("/transfer", userController.transferValue);

module.exports = userRouter;
