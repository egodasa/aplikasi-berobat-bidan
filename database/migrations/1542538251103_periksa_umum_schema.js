'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeriksaUmumSchema extends Schema {
  up () {
    this.create('periksa_umum', (table) => {
      table.string('id_periksa', 50).primary();
      table.dateTime('tgl_periksa');
      table.integer('no_pasien');
      table.text('keterangan');
      table.string('tensi', 10);
      table.integer('id_satuan_tensi');
    })
  }

  down () {
    this.drop('periksa_umum')
  }
}

module.exports = PeriksaUmumSchema
