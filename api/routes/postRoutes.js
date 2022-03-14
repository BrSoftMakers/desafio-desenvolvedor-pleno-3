const express = require("express");
postController = require("../controllers/postController");
const bodyParser = require("body-parser");
const { verifyJWT } = require("../utils/verifyToken");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/create", verifyJWT, (req, res) => {
  postController
    .insert(req.body.userID, req.body.title, req.body.text)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

router.put("/update/:id", verifyJWT, (req, res) => {
  postController
    .update(req.body.text, req.params.id, req.body.title)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

router.get("/:id", verifyJWT,(req, res) => {
  postController
    .getPostByID(req.params.id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

router.get("/list/:id", verifyJWT, (req, res) => {
  postController
    .listByUser(req.params.id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

router.delete("/delete/:id", verifyJWT, (req, res) => {
  postController
    .remove(req.params.id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(203).json(err);
    });
});

module.exports = router;
