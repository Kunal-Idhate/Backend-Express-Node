const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/learn")
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
