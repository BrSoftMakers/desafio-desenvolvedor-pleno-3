var express = require("express");
app = express();
port = process.env.PORT || 8626;

app.use(express.json());
app.listen(port);

console.log("Server started on port: " + port);

module.exports = app;
