exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'nickderrico@hotmail.com', password: 'nickrocks', lineup: ' ' },
        { email: 'carlosalcantar@hotmail.com', password: 'carlosrocks', lineup: ' ' },
        { email: 'nickgatti@hotmail.com', password: 'nick2rocks', lineup: ' ' },
        { email: 'jentristan@hotmail.com', password: 'jenrocks', lineup: ' ' },
        { email: 'troyamelotte@hotmail.com', password: 'troyrocks', lineup: ' ' },
      ]);
    });
};