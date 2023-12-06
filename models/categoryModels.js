const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categoryImg: {
    type: String,
    // required: true,
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "AddMedicin",
    },
  ],
});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
