
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
                { first_name: 'Chris', last_name: 'Paul', team_id: 4, jersey#: 3, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
                 { first_name: 'James', last_name: 'Harden', team_id: 4, jersey#: 13, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
                 { first_name: 'Eric', last_name: 'Gordon', team_id: 4, jersey#: 10, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
                 { first_name: 'Gerald', last_name: 'Green', team_id: 4, jersey#: 14, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
                 { first_name: 'Trevor', last_name: 'Ariza', team_id: 4, jersey#: 1, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
                 { first_name: 'Anthony', last_name: 'Davis', team_id: 5, jersey#: 23, position: 'PF', points: 35, steals: 3, assists: 11, blocks: 5 },
                 { first_name: 'Demarcus', last_name: 'Cousins', team_id: 5, jersey#: 0, position: 'PF', points: 21.5, steals: 1.4, assists: 3.2, blocks: 1.2 },
                 { first_name: 'Rajon', last_name: 'Rondo', team_id: 5, jersey#: 9, position: 'PG', points: 10.5, steals: 1.8, assists: 8.4, blocks: .1 },
                 { first_name: 'Jrue', last_name: 'Holiday', team_id: 5, jersey#: 11, position: 'PG', points: 14.7, steals: 1.5, assists: 6.2, blocks: .4 },
                 { first_name: 'Ian', last_name: 'Clark', team_id: 5, jersey#: 2, position: 'SG', points: 4.7, steals: .4, assists: 1, blocks: .1 },
      ]);
    });
};
