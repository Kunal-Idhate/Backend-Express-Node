const user = require("../models/userModel");

const getAllUsers = (req, res) => {
  user
    .find({})
    .then((result) => {
      res.status(205).json(result);
    })
    .catch((err) => {
      res.send("This is /user route get request");
    });
};
const postUsers = (req, res) => {
  console.log(req.body);
  // const newUser = new user({
  //   firstname: "Kunal",
  //   lastname: "Idhate",
  //   email: "kunal@gmail.com",
  // });
  const newUser = new user(req.body);

  newUser
    .save()
    .then(() => {
      res.status(202).json({
        message: "Document has been created",
      });
    })
    .catch((err) => {
      res.status(502).json({
        message: err,
      });
    });
};

module.exports = { getAllUsers, postUsers };
