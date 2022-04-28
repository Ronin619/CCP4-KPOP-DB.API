/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable("groups", (table) => {
        table.increments("id").primary();
        table
            .string("group_name", 32)
            .unique()
            .notNullable()
            .index();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable("groups");
};
