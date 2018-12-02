'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuatTabelBeliObatDetailTmpSchema extends Schema {
  up () {
    this.create('beli_obat_detail_tmp', (table) => {
      table.increments('id_detail').primary();
      table.integer('id_obat');
      table.integer('jumlah');
      table.string('id_beli', 50);
    })
  }

  down () {
    this.drop('beli_obat_detail_tmp')
  }
}

module.exports = BuatTabelBeliObatDetailTmpSchema
