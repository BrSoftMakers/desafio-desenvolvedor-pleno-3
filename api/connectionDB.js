const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/blog";

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(mongoUrl);
