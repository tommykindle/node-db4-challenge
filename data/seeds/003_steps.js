exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: 'Boil pasta' }, //1
        { recipe_id: 1, step_number: 2, instructions: 'add cheese' }, //2
        { recipe_id: 1, step_number: 3, instructions: 'serve!' }, //3
        { recipe_id: 2, step_number: 1, instructions: 'Boil pasta' }, //4
        { recipe_id: 2, step_number: 2, instructions: 'add cheese' }, //5
        { recipe_id: 2, step_number: 3, instructions: 'serve!' }, //6
        { recipe_id: 2, step_number: 1, instructions: 'Boil pasta' },//7
        { recipe_id: 3, step_number: 2, instructions: 'add cheese' }, //8
        { recipe_id: 3, step_number: 3, instructions: 'serve!' } //9
      ]);
    });
};
