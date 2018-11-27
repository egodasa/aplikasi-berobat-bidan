'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObatSchema extends Schema {
  up () {
    this.create('obat', (table) => {
      table.increments('id_obat').primary();
      table.string('nm_obat', 100);
      table.integer('stok');
      table.integer('id_jobat');
      table.integer('hrg_obat');
      table.integer('id_satuan_obat');
    })
  }

  down () {
    this.drop('obat')
  }
}

module.exports = ObatSchema
