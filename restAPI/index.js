const express = require("express");
const app = express();
const PORT = 9000;
const Post = require("./models/Posts");
// Getting rotes for api routes

const postRoutes = require("./routes/postRotes");

// now setting up the database
const db = require("./config/db");

db()
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Now adding middle ware to parsing data into json
app.use(express.json());

//now adding middle ware for routes
app.use("/api/post", postRoutes);

// for healthy api
app.get("/api", (req, res) => {
  res.status(200).json({ message: "welcome to Api route" });
});

//Sample routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "You are currently at home route" });
});

app.listen(PORT, () => {
  console.log(`Server Is live on ${PORT} port`);
});
