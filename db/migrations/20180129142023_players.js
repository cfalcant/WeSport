exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.integer('jersey#');
    table.string('position');
    table.integer('team_id').references('id').inTable('teams').notNullable().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};