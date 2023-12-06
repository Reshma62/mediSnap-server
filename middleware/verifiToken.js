var jwt = require("jsonwebtoken");
const verifiToken = (req, res, next) => {
  const token = req?.cookies?.token;
  //   console.log("token in the middleware", token);
  if (!token) {
    return res
      .status(401)
      .send({ message: "Unathorized access token not valid" });
  }
  const matchedToken = jwt.verify(
    token,
    process.env.TOKEN_SK,
    function (err, decoded) {
      if (err) {
        return res.status(401).send({ message: "Unathorized access" });
      }
      req.user = decoded;
      next();
    }
  );
  //   next();
};
module.exports = verifiToken;
