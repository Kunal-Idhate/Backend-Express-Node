const mongoose = require("mongoose");

async function db() {
  return await mongoose.connect("mongodb://127.0.0.1:27017/blog");
}

module.exports = db;
