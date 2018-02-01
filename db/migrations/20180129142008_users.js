exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email');
    table.string('password');
    table.text('lineup');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};