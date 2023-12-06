const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "doctor"],
    default: "user",
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
