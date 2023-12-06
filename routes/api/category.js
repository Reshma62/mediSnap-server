const express = require("express");

const {
  addCategory,
  getAllCategroy,
  getSignleCategroy,
} = require("../../controller/category");
const upload = require("../../middleware/uploadImage");
const verifiToken = require("../../middleware/verifiToken");

const _ = express.Router();
_.get("/get-category", verifiToken, getAllCategroy);
_.get("/get-singleCategory", getSignleCategroy);
_.post("/add-category", upload.single("cateImage"), addCategory);
module.exports = _;
