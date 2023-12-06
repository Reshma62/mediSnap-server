const mongoose = require("mongoose");
const { Schema } = mongoose;
const appoinmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const Appoinment = mongoose.model("Appoinment", appoinmentSchema);
module.exports = Appoinment;
