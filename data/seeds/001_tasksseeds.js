exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "installs!",
          notes: "npm i's",
          completed: true,
        },
      ]);
    });
};
