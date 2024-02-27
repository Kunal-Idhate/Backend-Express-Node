const getAllUsers = (req, res) => {
  res.send("This is /user route get request");
};
const postUsers = (req, res) => {
  res.json({
    name: "kunal",
  });
};

module.exports = { getAllUsers, postUsers };
