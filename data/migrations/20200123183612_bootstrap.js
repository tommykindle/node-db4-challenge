exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique();
            tbl.float('rating', 100, 2)
            tbl.integer('servings', 128)
        })

        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique();
        })

        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.text('instructions')
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .createTable('recipe_ingredient', tbl => {
            tbl.increments();
            tbl.string('unit', 128).notNullable();
            tbl.integer('quanity', 128).notNullable();

            tbl
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');

            tbl
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');

            tbl.unique(['recipe_id', 'ingredient_id']);
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredient')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
