const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
const port = 8000;

// db to be connected

require("./config/dbConfig");

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Helllo guyss");
});

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is live on 8000");
  }
});
