'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeriksaKbSchema extends Schema {
  up () {
    this.create('periksa_kb', (table) => {
      table.string('id_periksa', 50).primary();
      table.dateTime('tgl_periksa');
      table.integer('no_pasien');
      table.text('keterangan');
      table.string('tensi', 10);
      table.integer('id_satuan_tensi');
      table.string('nm_suami', 100);
      table.integer('anak_ke');
      table.date('haid_terakhir');
      table.integer('berat_badan');
      table.integer('id_satuan_berat_badan');
    })
  }

  down () {
    this.drop('periksa_kb')
  }
}

module.exports = PeriksaKbSchema
