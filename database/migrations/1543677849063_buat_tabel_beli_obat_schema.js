'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuatTabelBeliObatSchema extends Schema {
  up () {
    this.create('beli_obat', (table) => {
      table.string('id_beli', 50).primary();
      table.datetime('waktu_beli').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('beli_obat')
  }
}

module.exports = BuatTabelBeliObatSchema
