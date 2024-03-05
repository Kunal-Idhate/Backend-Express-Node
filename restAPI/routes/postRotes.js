const express = require("express");
const Router = express.Router();
const {
  getAllPosts,
  getPostByID,
  createPost,
  updatePostById,
  deletePostById,
} = require("../controller/postsController");

// creating seperate Routes For CRUD

// reading all data
Router.get("/", getAllPosts);

//Reading data having specific id
Router.get("/:id", getPostByID);

//Creating new data
Router.post("/", createPost);

// Updating specific data
Router.put("/:id", updatePostById);

// Deleting specific data
Router.delete("/:id", deletePostById);

module.exports = Router;
