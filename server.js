const express = require("express");
const app = express();

require("dotenv").config();
var cors = require("cors");
var cookieParser = require("cookie-parser");
const Routes = require("./routes");
const dbConnection = require("./utils/dbConfige");
const verifiToken = require("./middleware/verifiToken");
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

app.use(Routes);
app.get("/health", verifiToken, function (req, res) {
  res.send("Medi snap is available");
});

const main = async () => {
  await dbConnection();
  await app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
  });
};
main();
