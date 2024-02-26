const express = require("express");
const app = express();

const port = 5000;

// -------------------------------------------------------------------------//

//middleware

const customizerMiddleware = (req, res, next) => {
  console.log("This is middlware 1");
  next();
};
const customizerMiddleware2 = (req, res, next) => {
  console.log("This is middlware 2");
  next();
};

// -------------------------------------------------------------------------//

// For using middlware to any routes we use app.use
app.use(customizerMiddleware);

// for usng static files also we use middleware

app.use(express.static("public"));

// -------------------------------------------------------------------------//

app.get("/", customizerMiddleware, customizerMiddleware2, (req, res) => {
  res.send("Helllo guysss");
});
app.get("/me", customizerMiddleware2, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// -------------------------------------------------------------------------//

// Handling queries in req
app.get("/shop", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send("This is shop route.  ");
  //   It will give like this { product: 'soap' }
});

// Handling params in req
app.get("/user/:id", (req, res) => {
  const params = req.params;
  console.log(params);
  res.send(`This is User route.  Welcome back ${params.id}`);
});

// -------------------------------------------------------------------------//

app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});
