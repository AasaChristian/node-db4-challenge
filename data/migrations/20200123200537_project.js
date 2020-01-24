
exports.up = function(knex) {
   return knex.schema
   .createTable("recipe", tbl => {
    tbl.increments();
    tbl.text('recipe_name')
    tbl.text('intructions')
})
.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.text('ingredients_name')
})

.createTable("measurements", tbl => {
    tbl.increments();
    tbl.float('quantity', 5000)
    tbl.string("measurement_type")
    tbl.integer("ingredients_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
                .onUpdate("CASCADE"); // what happens if the publisher id changes

    tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipe")
                .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
                .onUpdate("CASCADE"); // what happens if the publisher id changes
})

};


exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists("measurements")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipe")
};
