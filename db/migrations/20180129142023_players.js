exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.integer('jersey#');
    table.string('position');
    table.integer('team_id').references('id').inTable('teams').notNullable().onDelete('cascade');
    table.integer('points/game');
    table.integer('steals/game');
    table.integer('assists/game');
    table.integer('blocks/game');
    table.integer('fouls/game');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};