const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (token) {
    const decodeToken = jwt.verify(token, process.env.jwtTokenCode);
    if (decodeToken) {
      next();
    } else {
      res.status(403).json({
        message: "Forbidden token",
      });
    }
  } else {
    res.status(403).json({
      message: "No token is there",
    });
  }
};

module.exports = verifyToken;
