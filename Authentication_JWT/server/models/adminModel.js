const mongoose = require("mongoose");

// Create a structure how you want th data to be stored

const adminSchemma = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// give a tructure naem which we will called model

const Admin = mongoose.model("admin", adminSchemma);
module.exports = Admin;
