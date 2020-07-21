
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');  
        table.string('codigo');  
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
      }); 
};

exports.down = function(knex) {
    return knex.schema.droptable('users')
};
