'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EditTabelBeliObatSchema extends Schema {
  up () {
    this.alter('beli_obat',(table) => {
      table.integer('id_terapi').alter();
    });
    this
    .renameTable('beli_obat', 'beli_obat_detail')
    .table('beli_obat_detail', (table) => {
      table.dropIndex('id_terapi', 'PRIMARY');
      table.renameColumn('id_terapi', 'id_detail');
      table.renameColumn('id_periksa', 'id_beli');
    })
    this.alter('beli_obat_detail', (table) => {
      table.increments('id_detail').alter();
    })
  }

  down () {
    this.alter('beli_obat_detail',(table) => {
      table.integer('id_detail').alter();
    });
    this
    .renameTable('beli_obat_detail', 'beli_obat')
    .table('beli_obat', (table) => {
      table.dropIndex('id_detail', 'PRIMARY');
      table.renameColumn('id_detail', 'id_terapi');
      table.renameColumn('id_beli','id_periksa');
    })
    this.alter('beli_obat',(table) => {
      table.increments('id_terapi').alter();
    });
  }
}

module.exports = EditTabelBeliObatSchema
