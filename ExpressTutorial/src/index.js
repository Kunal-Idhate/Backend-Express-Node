const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//bulitin midleware
// app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");

// customize view directory
app.set("views", templatePath);

hbs.registerPartials(partialsPath);

// template engine route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world by kunal</h1>");
});
app.get("/about", (req, res) => {
  res.render("about", {
    aboutmessage: " We are at about page",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    errormessage: "OOppssss Wrong page",
  });
});

app.listen(port, () => {
  console.log(`Server is loading on port ${port}`);
});
