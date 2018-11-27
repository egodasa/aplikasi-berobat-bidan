'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeriksaAncSchema extends Schema {
  up () {
    this.create('periksa_anc', (table) => {
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
      table.integer('tinggi_badan');
      table.integer('id_satuan_tinggi_badan');
      table.date('hpht');
      table.date('htp');
      table.integer('umur_kehamilan');
      table.integer('id_satuan_umur_kehamilan');
      table.date('kb_terakhir');
    })
  }
  down () {
    this.drop('periksa_anc')
  }
}
module.exports = PeriksaAncSchema
