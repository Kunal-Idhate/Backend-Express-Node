const express = require("express");
const app = express();

const port = 5000;

app.use(express.static("public"));
// -------------------------------------------------------------------------//
// for using template engines you have to Install pug in command line
// npm install pug --save
//then you havet to set template engine
app.set("view engine", "ejs");
// -------------------------------------------------------------------------//

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/template", (req, res) => {
  res.render("template", { user: "Kunal Idhate" });
  // you can give any dynamic value here
});

// -------------------------------------------------------------------------//

app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});
