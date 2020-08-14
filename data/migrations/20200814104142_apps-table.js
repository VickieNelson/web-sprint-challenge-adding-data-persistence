exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");

      tbl.string("name", 255).notNullable().unique().index();
      tbl.text("description");
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl.timestamps(true, true);
    })

    .createTable("resources", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().unique().index();
      tbl.text("description");
      tbl.timestamps(true, true);
    })

    .createTable("project_resources", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })

    .createTable("task", (tbl) => {
      tbl.increments("id");
      tbl.text("description", 255).notNullable().unique().index();
      tbl.text("notes", 500);
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
