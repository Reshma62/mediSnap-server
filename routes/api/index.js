const express = require("express");
const _ = express.Router();
const User = require("./user");
const Category = require("./category");
const Product = require("./product");
_.use(User);
_.use("/admin", Category);
_.use("/admin", Product);
module.exports = _;
