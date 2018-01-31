exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', (table) => {
    table.increments();
    table.string('team_name');
    table.string('head_coach');
    table.string('city');
    table.string('logo');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};