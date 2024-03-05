const mongoose = require("mongoose");

// Create a structure how you want th data to be stored

const userSchemma = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  email: {
    unique: true,
    type: String,
  },
});

// give a tructure naem which we will called model

const user = mongoose.model("user", userSchemma);
module.exports = user;
