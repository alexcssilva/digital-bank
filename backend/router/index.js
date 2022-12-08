const express = require("express");

const userRouter = require("./user/userRouter");

const router = express();

router.use("/users", userRouter);

module.exports = router;
