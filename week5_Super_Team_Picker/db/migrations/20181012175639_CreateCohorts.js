exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohorts", table => {
    //CREATE TABLE "countries" (   ==== > start adding my columns
        table.increments("id"); // "id" SERIAL ... in sql
        table.text("members"); // "title" VARCHAR(255) 
        table.string("name"); // "title" VARCHAR(255) ... 
        table.string("logoUrl"); // "
        table.integer("createdAt");
    }) };
    // exports down is like a roll back
    exports.down = function(knex, Promise) {
      return knex.schema.dropTable("cohorts");
    };
 