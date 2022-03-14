const mongoose = require("mongoose");

postSchema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

var postModel = mongoose.model("posts", postSchema);

function insert(userID, title, text) {
  return new Promise((resolve, reject) => {
    user = {
      userID: userID,
      title: title,
      text: text,
    };
    const postDB = new postModel(user);
    postDB.save((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function update(text, postID, title) {
  return new Promise((resolve, reject) => {
    postModel.findOneAndUpdate(
      {
        _id: postID,
      },
      {
        $set: {
          title: title,
          text: text,
        },
      },
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostByID(postID) {
  return new Promise((resolve, reject) => {
    postModel.findOne({ _id: postID }, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

function listByUser(userID) {
  return new Promise((resolve, reject) => {
    postModel.find({ userID: userID }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function remove(postID) {
  return new Promise((resolve, reject) => {
    postModel.findOneAndRemove({ _id: postID }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
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
