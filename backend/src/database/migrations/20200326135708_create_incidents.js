/**
 * @typedef {import('knex')} knex
 */

/**
 * @param {knex} knex
 */
exports.up = (knex) =>
  knex.schema.createTable('incidents', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });

/**
 * @param {knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTable('incidents');
};
