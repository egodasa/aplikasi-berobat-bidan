'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PenggunaSchema extends Schema {
  up () {
    this.create('pengguna', (table) => {
      table.increments('id_pengguna').primary();
      table.string('username', 20);
      table.text('password');
      table.string('email', 50);
      table.integer('id_jpengguna');
      table.timestamp('waktu').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('pengguna')
  }
}

module.exports = PenggunaSchema
