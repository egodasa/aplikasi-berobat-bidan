'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BiayaBerobatSchema extends Schema {
  up () {
    this.create('biaya_berobat', (table) => {
      table.increments('id_biaya').primary();
      table.string('id_periksa', 50);
      table.string('nm_biaya', 255);
      table.integer('tarif');
    })
  }

  down () {
    this.drop('biaya_berobat')
  }
}

module.exports = BiayaBerobatSchema
