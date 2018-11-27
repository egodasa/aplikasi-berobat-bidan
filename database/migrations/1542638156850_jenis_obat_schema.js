'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JenisObatSchema extends Schema {
  up () {
    this.create('jenis_obat', (table) => {
      table.increments('id_jobat').primary();
      table.string('nm_jobat', 20);
    })
  }

  down () {
    this.drop('jenis_obat')
  }
}

module.exports = JenisObatSchema
