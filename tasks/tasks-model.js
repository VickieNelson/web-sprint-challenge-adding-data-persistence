const db = require("../data/db-config.js");

// Working -   GET
function find() {
  return db("tasks");
}

const findById = (id) => db("tasks").where({ id }).first();

//working post
const add = (record) => {
  console.log("task post");
  return db("tasks")
    .insert(record, "id")
    .then((response) => findById(response[0]));
};
module.exports = {
  find,
  findById,
  add,
};
