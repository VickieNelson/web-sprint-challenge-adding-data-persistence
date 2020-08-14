const db = require("../data/db-config.js");

// Working -   GET
function find() {
  return db("resources");
}

const findById = (id) => db("resources").where({ id }).first();
//working post
const add = (record) =>
  db("resources")
    .insert(record, "id")
    .then((response) => findById(response[0]));

module.exports = {
  find,
  findById,
  add,
};
