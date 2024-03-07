const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const login = (req, res) => {
  let { username, password } = req.body;
  Admin.findOne({ username })
    .then(async (result) => {
      const validatedPass = await bcrypt.compare(password, result.password);
      if (validatedPass) {
        const token = jwt.sign({ id: result._id }, process.env.jwtTokenCode, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: "Token created successfully",
          token: token,
        });
      } else {
        res.status(400).json({
          message: "Invalid password",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Auth failed",
        error: err,
      });
    });
};

const register = async (req, res) => {
  let { username, password } = req.body;

  password = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({ username, password });

  newAdmin
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Admin created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
};

module.exports = { login, register };
