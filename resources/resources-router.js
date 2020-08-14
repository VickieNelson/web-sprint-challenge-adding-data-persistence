const express = require("express");

const helpers = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  helpers
    .find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get" });
    });
});

router.get("/:id", (req, res) => {
  helpers
    .findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get" });
    });
});

router.post("/", (req, res) => {
  helpers
    .add(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to post" });
    });
});

module.exports = router;
