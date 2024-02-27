const express = require("express");
const Router = express.Router();
const { getAllUsers, postUsers } = require("../controllers/userController");

Router.get("/", getAllUsers);
Router.post("/", postUsers);

module.exports = Router;
