exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { first_name: 'LeBron', last_name: 'James', team_id: 1, jersey#: 23, position: 'SF', points: 27.1, steals: 1.6, assists: 7.1, blocks: 0.8 },
        { first_name: 'Kevin', last_name: 'Love', team_id: 1, jersey#: 0, position: 'PF', points: 22, steals: 4, assists: 13, blocks: 2 },
        { first_name: 'Isaiah', last_name: 'Thomas', team_id: 1, jersey#: 3, position: 'PG', points: 25, steals: 5, assists: 12, blocks: 4 },
        { first_name: 'Dwayne', last_name: 'Wade', team_id: 1, jersey#: 9, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Kyle', last_name: 'Korver', team_id: 1, jersey#: 26, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Stephen', last_name: 'Curry', team_id: 2, jersey#: 30, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Klay', last_name: 'Thompson', team_id: 2, jersey#: 11, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Draymond', last_name: 'Green', team_id: 2, jersey#: 23, position: 'PF', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Nick', last_name: 'Young', team_id: 2, jersey#: 6, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Kevin', last_name: 'Durant', team_id: 2, jersey#: 35, position: 'SF', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Carmelo', last_name: 'Anthony', team_id: 3, jersey#: 7, position: 'SF', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Russell', last_name: 'Westbrook', team_id: 3, jersey#: 0, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Paul', last_name: 'George', team_id: 3, jersey#: 13, position: 'SF', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Steven', last_name: 'Adams', team_id: 3, jersey#: 12, position: 'C', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Raymond', last_name: 'Felton', team_id: 3, jersey#: 2, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Chris', last_name: 'Paul', team_id: 4, jersey#: 3, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'James', last_name: 'Harden', team_id: 4, jersey#: 13, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Eric', last_name: 'Gordan', team_id: 4, jersey#: 10, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Gerald', last_name: 'Green', team_id: 4, jersey#: 14, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Trevor', last_name: 'Ariza', team_id: 4, jersey#: 1, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Anthony', last_name: 'Davis', team_id: 5, jersey#: 23, position: 'PF', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Demarcus', last_name: 'Cousins', team_id: 5, jersey#: 0, position: 'PF', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Rajon', last_name: 'Radno', team_id: 5, jersey#: 9, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Jrue', last_name: 'Holiday', team_id: 5, jersey#: 11, position: 'PG', points: 35, steals: 3, assists: 11, blocks: 5 },
        { first_name: 'Ian', last_name: 'Clark', team_id: 5, jersey#: 2, position: 'SG', points: 35, steals: 3, assists: 11, blocks: 5 },
      ]);
    });
};