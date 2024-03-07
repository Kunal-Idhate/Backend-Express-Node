const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const app = express();
const port = 8000;

const verifyToken = require("./middleware/authMiddleware");

// db to be connected

require("./config/dbConfig");

// front-end client can make requests for resources to an external back-end server
app.use(cors());
app.use(express.json());
// to read the data from req we need one middleware
app.use("/user", verifyToken, userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Helllo guyss");
});

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is live on 8000");
  }
});
