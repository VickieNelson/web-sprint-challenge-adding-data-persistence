exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "resource 1", description: "res 1!" },
        {
          name: "Resource 2",
          description: "Res2!",
        },
      ]);
    });
};
