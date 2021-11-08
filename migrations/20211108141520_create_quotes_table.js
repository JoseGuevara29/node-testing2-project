exports.up = function (knex) {
  return knex.schema.createTable("quotes", (tbl) => {
    tbl.increments("quotes_id"), tbl.text("quotes").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("quotes");
};
