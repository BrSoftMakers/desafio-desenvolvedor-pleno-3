const express = require("express");
userController = require("../controllers/userController");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
  userController
    .insert(req.body.login, req.body.password)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

router.post("/login", (req, res) => {
  userController
    .login(req.body.login, req.body.password)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

module.exports = router;
