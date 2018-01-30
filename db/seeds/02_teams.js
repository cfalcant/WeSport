
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { team_name: 'Cavaliers', head_coach: 'Tyronn Lue', city: 'Cleveland' },
        { team_name: 'Warriors', head_coach: 'Steve Kerr', city: 'San Francisco' },
        { team_name: 'Thunder', head_coach: 'Billy Donovan', city: 'Oklahoma City' },
        { team_name: 'Rockets', head_coach: "Mike D'Anotni", city: 'Houston' },
        { team_name: 'Pelicans', head_coach: 'Alvin Gentry', city: 'New Orleans' }
      ]);
    });
};
