const Post = require("../models/Posts");

const getAllPosts = (req, res) => {
  Post.find({})
    .then((data) => {
      res.status(200).json({
        message: "Successfull get request",
        data: data,
      });
    })
    .catch((err) => {
      res.status(505).json({
        message: err,
      });
    });
};
const getPostByID = (req, res) => {
  let postId = req.params.id;
  Post.find({ _id: postId })
    .then((data) => {
      res.status(200).json({
        message: "Your request is successfully accepted ",
        data: data,
      });
    })
    .catch((err) => {
      res.status(505).json({
        message: err,
      });
    });
};
const createPost = (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  newPost
    .save()
    .then((data) => {
      res.status(200).json({
        message: "Post is creates successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(505).json({
        message: err,
      });
    });
};

const updatePostById = (req, res) => {
  let postId = req.params.id;
  const newPostinfo = {
    title: req.body.title,
    description: req.body.description,
  };

  Post.findByIdAndUpdate(postId, newPostinfo)
    .then(() => {
      res.status(200).json({
        message: "Post Updated successfully",
      });
    })
    .catch((err) => {
      res.status(505).json({
        message: err,
      });
    });
};
const deletePostById = (req, res) => {
  let postId = req.params.id;

  Post.findByIdAndDelete(postId)
    .then(() => {
      res.status(200).json({
        message: "Post Deleted successfully",
      });
    })
    .catch((err) => {
      res.status(505).json({
        message: err,
      });
    });
};
module.exports = {
  getAllPosts,
  getPostByID,
  createPost,
  updatePostById,
  deletePostById,
};
