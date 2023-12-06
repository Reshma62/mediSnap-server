const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  const { userName, email, role } = req.body;
  const isExistsUser = User.findOne({ email });
  if (isExistsUser.length) {
    return res.status(401).send({ error: "user already exists" });
  }
  const user = new User({
    userName,
    email,
    role,
  });
  user.save();
  res.status(200).send({ success: "User saved successfully" });
};
const createToken = async (req, res) => {
  const userEmail = req.body;
  console.log("userEmail", userEmail);
  const token = jwt.sign(userEmail, process.env.TOKEN_SK, {
    expiresIn: "100h",
  });
  res
    .cookie("token", token, {
      samesite: "none",
      httpOnly: true,
      secure: false,
    })
    .send({ message: "success true" });
};

module.exports = {
  createUser,
  createToken,
};
