'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TambahResepKeTabelPeriksaUmumSchema extends Schema {
  up () {
    this.table('periksa_umum', (table) => {
      table.text('resep');
    })
  }

  down () {
    this.table('periksa_umum', (table) => {
      table.dropColumn('resep');
    })
  }
}

module.exports = TambahResepKeTabelPeriksaUmumSchema
