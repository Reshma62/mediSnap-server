const express = require("express");
const { addProduct, getProduct } = require("../../controller/product");
const upload = require("../../middleware/uploadImage");
const verifiToken = require("../../middleware/verifiToken");

const _ = express.Router();

_.get("/get-product", getProduct);
_.post("/add-product", verifiToken, upload.single("product_image"), addProduct);
module.exports = _;
