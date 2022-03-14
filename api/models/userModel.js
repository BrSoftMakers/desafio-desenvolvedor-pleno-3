const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

var userModel = mongoose.model("user", userSchema);

function insert(user) {
  return new Promise((resolve, reject) => {
    const userDb = new userModel(user);
    userDb.save((err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function getUser(login) {
  return new Promise((resolve, reject) => {
    userModel.findOne({ login: login }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

module.exports = {
  insert,
  getUser,
};
