
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { first_name: 'LeBron', last_name: 'James', team_id: 1, jersey: 23, position: 'SF', points: 27.1, steals: 1.6, assists: 7.1, blocks: 0.8 },
{ first_name: 'Kevin', last_name: 'Love', team_id: 1, jersey: 0, position: 'PF', points: 18.4, steals: 0.7, assists: 2.3, blocks: 0.5 },
{ first_name: 'Isaiah', last_name: 'Thomas', team_id: 1, jersey: 3, position: 'PG', points: 19.0, steals: 1.0, assists: 5.1, blocks: 0.1 },
{ first_name: 'Dwayne', last_name: 'Wade', team_id: 1, jersey: 9, position: 'PG', points: 22.8, steals: 2.3, assists: 5.6, blocks: 0.9 },
{ first_name: 'Kyle', last_name: 'Korver', team_id: 1, jersey: 26, position: 'SG', points: 9.9, steals: 0.7, assists: 1.8, blocks: 0.3 },
{ first_name: 'Stephen', last_name: 'Curry', team_id: 2, jersey: 30, position: 'PG', points: 23.1, steals: 1.8, assists: 6.8, blocks: 0.2 },
{ first_name: 'Klay', last_name: 'Thompson', team_id: 2, jersey: 11, position: 'SG', points: 19.2, steals: 0.9, assists: 2.3, blocks: 0.5 },
{ first_name: 'Draymond', last_name: 'Green', team_id: 2, jersey: 23, position: 'PF', points: 9.2, steals: 1.4, assists: 4.4, blocks: 1.1 },
{ first_name: 'Nick', last_name: 'Young', team_id: 2, jersey: 6, position: 'SG', points: 11.6, steals: 0.6, assists: 1.0, blocks: 0.2 },
{ first_name: 'Kevin', last_name: 'Durant', team_id: 2, jersey: 35, position: 'SF', points: 27.1, steals: 1.2, assists: 3.9, blocks: 1.1 },
{ first_name: 'Carmelo', last_name: 'Anthony', team_id: 3, jersey: 7, position: 'SF', points: 24.4, steals: 2.9, assists: 3.1, blocks: 1.0 },
{ first_name: 'Russell', last_name: 'Westbrook', team_id: 3, jersey: 0, position: 'PG', points: 22.9, steals: 1.7, assists: 8.1, blocks: 0.3 },
{ first_name: 'Paul', last_name: 'George', team_id: 3, jersey: 13, position: 'SF', points: 18.4, steals: 1.7, assists: 3.1, blocks: 0.4 },
{ first_name: 'Steven', last_name: 'Adams', team_id: 3, jersey: 12, position: 'C', points: 8.3, steals: 0.7, assists: 0.8, blocks: 1.0 },
{ first_name: 'Raymond', last_name: 'Felton', team_id: 3, jersey: 2, position: 'PG', points: 11.6, steals: 1.2, assists: 5.5, blocks: 0.2 },
{ first_name: 'Chris', last_name: 'Paul', team_id: 4, jersey: 3, position: 'PG', points: 18.7, steals: 2.3, assists: 9.8, blocks: 0.1 },
{ first_name: 'James', last_name: 'Harden', team_id: 4, jersey: 13, position: 'PG', points: 22.7, steals: 1.5, assists: 5.9, blocks: 0.5 },
{ first_name: 'Eric', last_name: 'Gordon', team_id: 4, jersey: 10, position: 'SG', points: 16.8, steals: 1.0, assists: 3.1, blocks: 0.3 },
{ first_name: 'Gerald', last_name: 'Green', team_id: 4, jersey: 14, position: 'SG', points: 9.7, steals: 0.5, assists: 1.0, blocks: 0.3 },
{ first_name: 'Trevor', last_name: 'Ariza', team_id: 4, jersey: 1, position: 'SG', points: 10.5, steals: 1.5, assists: 2.1, blocks: 0.3 },
{ first_name: 'Anthony', last_name: 'Davis', team_id: 5, jersey: 23, position: 'PF', points: 22.8, steals: 1.3, assists: 1.8, blocks: 2.3 },
                 { first_name: 'Demarcus', last_name: 'Cousins', team_id: 5, jersey: 0, position: 'PF', points: 21.5, steals: 1.4, assists: 3.2, blocks: 1.2 },
                 { first_name: 'Rajon', last_name: 'Rondo', team_id: 5, jersey: 9, position: 'PG', points: 10.5, steals: 1.8, assists: 8.4, blocks: .1 },
                 { first_name: 'Jrue', last_name: 'Holiday', team_id: 5, jersey: 11, position: 'PG', points: 14.7, steals: 1.5, assists: 6.2, blocks: .4 },
                 { first_name: 'Ian', last_name: 'Clark', team_id: 5, jersey: 2, position: 'SG', points: 4.7, steals: .4, assists: 1, blocks: .1 },
      ]);
    });
};
