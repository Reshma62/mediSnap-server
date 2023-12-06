const mongoose = require("mongoose");

const dbConnection = () => {
  const uri = process.env.MONGO_URI;
  mongoose
    .connect(uri)
    .then(() => console.log("Mongodb is successfully Connected !"));
};
module.exports = dbConnection;
