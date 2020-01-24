exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'cheese' }, //1
        { name: 'milk' }, //2
        { name: 'pudding' } //3
      ]);
    });
};