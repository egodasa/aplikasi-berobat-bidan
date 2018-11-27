'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SatuanSchema extends Schema {
  up () {
    this.create('satuan', (table) => {
      table.increments('id_satuan').primary();
      table.string('nm_satuan', 50);
      table.integer('id_jsatuan');
    })
  }

  down () {
    this.drop('satuan')
  }
}

module.exports = SatuanSchema
