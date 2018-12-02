'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/*
 * Perubahan:
 * PK tabel beli_obat_detail dari AI menjadi int biasa
 */

class GantiAiJadiIntBiasaTabelBeliObatDetailSchema extends Schema {
  up () {
    this.alter('beli_obat_detail', (table) => {
      table.integer('id_detail').alter();
    })
  }

  down () {
    this.table('beli_obat_detail', (table) => {
      table.dropIndex('id_detail', 'PRIMARY');
    })
    this.alter('beli_obat_detail', (table) => {
      table.increments('id_detail', 11).alter();
    })
  }
}

module.exports = GantiAiJadiIntBiasaTabelBeliObatDetailSchema
