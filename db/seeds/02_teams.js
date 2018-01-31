
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { team_name: 'Cavaliers', head_coach: 'Tyronn Lue', city: 'Cleveland', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/100px-Cleveland_Cavaliers_logo.svg.png' },
        { team_name: 'Warriors', head_coach: 'Steve Kerr', city: 'San Francisco', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png'},
        { team_name: 'Thunder', head_coach: 'Billy Donovan', city: 'Oklahoma City', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/200px-Oklahoma_City_Thunder.svg.png' },
        { team_name: 'Rockets', head_coach: "Mike D'Anotni", city: 'Houston', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/200px-Houston_Rockets.svg.png' },
        { team_name: 'Pelicans', head_coach: 'Alvin Gentry', city: 'New Orleans', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/200px-New_Orleans_Pelicans_logo.svg.png' }
      ]);
    });
};
