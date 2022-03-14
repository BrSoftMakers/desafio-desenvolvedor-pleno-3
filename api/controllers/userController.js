const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

function insert(login, password) {
  return new Promise((resolve, reject) => {
    user = {
      login: login,
      password: password,
    };

    userModel
      .insert(user)
      .then((obj) => {
        resolve({
          status: true,
          msg: "User created successfully",
          user: obj,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Can't create user",
          user: null,
          error: err,
        });
      });
  });
}

function login(login, password) {
  return new Promise((resolve, reject) => {
    userModel
      .getUser(login)
      .then((user) => {
        if (user === null) {
          /*Este usuário não existe*/
          resolve({
            status: false,
            msg: "User not found",
            user: null,
            error: null,
          });
        }

        if (user.password == password) {
          const token = jwt.sign({ foo: user._id }, process.env.SECRET);
          resolve({
            status: true,
            msg: "User successfully logged in!",
            token: token,
            error: null,
          });
        }

        resolve({
          status: true,
          msg: "Wrong Password!",
          user: null,
          error: null,
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "",
          user: null,
          error: err.message,
        });
      });
  });
}

module.exports = {
  insert,
  login,
};
