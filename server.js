const express = require("express");

// const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());
// server.use("/api/schemes", SchemeRouter);

server.use("/api/projects", require("./projects/projects-router"));
server.use("/api/resources", require("./resources/resources-router"));
server.use("/api/tasks", require("./tasks/tasks-router"));

server.get("/", (req, res) => {
  res.status(200).json(" Sprint Project 🖥");
});

module.exports = server;
