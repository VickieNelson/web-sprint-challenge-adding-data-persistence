exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "react 1", description: "whatever!", completed: true },
        {
          name: "Twitter Clone 1",
          description: "Twitter clone react!",
          completed: false,
        },
      ]);
    });
};
