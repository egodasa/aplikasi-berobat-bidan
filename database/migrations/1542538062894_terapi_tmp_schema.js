'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TerapiTmpSchema extends Schema {
  up () {
    this.create('terapi_tmp', (table) => {
      table.increments('id_terapi').primary();
      table.string('id_periksa', 50);
      table.integer('id_obat');
      table.integer('jumlah');
    })
  }

  down () {
    this.drop('terapi_tmp')
  }
}

module.exports = TerapiTmpSchema
