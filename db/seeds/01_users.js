exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'nickderrico@hotmail.com', password: 'nickrocks' },
        { email: 'carlosalcantar@hotmail.com', password: 'carlosrocks' },
        { email: 'nickgatti@hotmail.com', password: 'nick2rocks' },
        { email: 'jentristan@hotmail.com', password: 'jenrocks' },
        { email: 'troyamelotte@hotmail.com', password: 'troyrocks' },
      ]);
    });
};