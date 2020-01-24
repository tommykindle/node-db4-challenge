exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Mac and Cheese', servings: 4 }, //1
        { name: 'Chili', servings: 6 }, //2
        { name: 'Thai Curry', servings: 2 } //3
      ]);
    });
};