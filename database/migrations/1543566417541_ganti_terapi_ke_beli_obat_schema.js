'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GantiTerapiKeBeliObatSchema extends Schema {
  up () {
    this.renameTable('terapi', 'beli_obat');
  }

  down () {
    this.renameTable('beli_obat', 'terapi');
  }
}

module.exports = GantiTerapiKeBeliObatSchema
