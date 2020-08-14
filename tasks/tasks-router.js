const express = require("express");
const db_projects = "../projects/projects-model";
const helpers = require("./tasks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  helpers
    .find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed!!!!" });
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

router.post("/:id", validatingProjectId, (req, res) => {
  helpers
    .add({ project_id: req.params.id, ...req.body })
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to post task" });
    });
});

function validatingProjectId(req, res, next) {
  db_projects
    .findById(req.params.id)
    .then((response) => {
      respons ? next() : res,
        status(500).json({ message: "Project ID not valid" });
    })
    .catch(() => res.status(500).json({ message: "try again" }));
}

module.exports = router;
