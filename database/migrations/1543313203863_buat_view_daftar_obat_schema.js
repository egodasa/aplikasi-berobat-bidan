'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuatViewDaftarObatSchema extends Schema {
  up () {
    this.raw(`CREATE VIEW 
    daftar_obat AS SELECT a.*,
    b.nm_satuan,
    c.nm_jobat 
    FROM obat a 
    JOIN satuan b ON a.id_satuan_obat = b.id_satuan 
    JOIN jenis_obat c ON a.id_jobat = c.id_jobat`);
  }

  down () {
    this.raw('DROP VIEW daftar_obat');
  }
}

module.exports = BuatViewDaftarObatSchema
