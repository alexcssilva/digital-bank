const cors = require("cors");
const express = require("express");

const router = require("../router/index");

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

module.exports = app;
