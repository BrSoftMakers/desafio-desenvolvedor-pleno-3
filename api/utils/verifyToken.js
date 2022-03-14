const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      auth: false,
      msg: "Miss token",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({
        auth: false,
        msg: err.message,
      });
    }
    req.userID = decoded.id;
    next();
  });
}

module.exports = {
  verifyJWT,
};
