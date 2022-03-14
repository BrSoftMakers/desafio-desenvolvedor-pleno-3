const postModel = require("../models/postsModel");

function insert(userID, title, text) {
  return new Promise((resolve, reject) => {
    postModel
      .insert(userID, title, text)
      .then((obj) => {
        resolve({
          status: true,
          msg: "Post created successfully",
          user: obj,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Can't create post",
          post: null,
          error: err,
        });
      });
  });
}

function update(text, postID, title) {
  return new Promise((resolve, reject) => {
    postModel
      .update(text, postID, title)
      .then((obj) => {
        resolve({
          status: true,
          msg: "Post updated!",
          post: obj,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Can't update post",
          post: null,
          error: err,
        });
      });
  });
}

function getPostByID(postID) {
  return new Promise((resolve, reject) => {
    postModel
      .getPostByID(postID)
      .then((obj) => {
        resolve({
          status: true,
          msg: "",
          post: obj,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Can't get post",
          post: null,
          error: err,
        });
      });
  });
}

function listByUser(userID) {
  return new Promise((resolve, reject) => {
    postModel
      .listByUser(userID)
      .then((objs) => {
        resolve({
          status: true,
          msg: "",
          posts: objs,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Can't get posts",
          post: null,
          error: err,
        });
      });
  });
}

function remove(postID) {
  return new Promise((resolve, reject) => {
    postModel
      .remove(postID)
      .then((obj) => {
        resolve({
          status: true,
          msg: "",
          post: obj,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Can't delete post",
          post: null,
          error: err,
        });
      });
  });
}

module.exports = {
  insert,
  update,
  getPostByID,
  listByUser,
  remove,
};
