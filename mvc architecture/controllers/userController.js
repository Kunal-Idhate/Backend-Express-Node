const user = require("../models/userModel");

const getAllUsers = (req, res) => {
  user
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send("This is /user route get request");
    });
};
const postUsers = (req, res) => {
  const newUser = new user({
    firstname: "Kunal",
    lastname: "Idhate",
    email: "kunal@gmail.com",
  });

  newUser
    .save()
    .then(() => {
      res.json({
        message: "Document has been created",
      });
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
};

module.exports = { getAllUsers, postUsers };
