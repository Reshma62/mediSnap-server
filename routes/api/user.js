const express = require("express");
const { createUser, createToken } = require("../../controller/authController");
const _ = express.Router();
_.post("/create-user", createUser);
_.post("/create-token", createToken);
module.exports = _;
