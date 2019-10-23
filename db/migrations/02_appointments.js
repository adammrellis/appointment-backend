exports.up = function(knex, Promise) {
    return knex.schema.createTable('appointments', table => {
        table.increments()
        table.text('appointment details').notNullable();
        table.string('time').notNullable();
        table.string('location').notNullable();
        table.integer('appointment_id')
            .references('id')
            .inTable('users')
            .index()
            .notNullable()
            .onDelete('cascade');
        table.boolean('accepted_meeting').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex, Promise) {}