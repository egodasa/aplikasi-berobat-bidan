'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JenisPenggunaSchema extends Schema {
  up () {
    this.create('jenis_pengguna', (table) => {
      table.increments('id_jpengguna').primary();
      table.string('nm_jpengguna', 30);
    })
  }

  down () {
    this.drop('jenis_pengguna')
  }
}

module.exports = JenisPenggunaSchema
