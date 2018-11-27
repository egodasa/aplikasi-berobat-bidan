'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JenisSatuanSchema extends Schema {
  up () {
    this.create('jenis_satuan', (table) => {
      table.increments('id_jsatuan').primary();
      table.string('nm_jsatuan', 30);
    })
  }

  down () {
    this.drop('jenis_satuan')
  }
}

module.exports = JenisSatuanSchema
