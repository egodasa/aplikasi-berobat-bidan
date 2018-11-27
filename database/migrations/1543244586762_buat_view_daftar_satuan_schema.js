'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuatViewDaftarSatuanSchema extends Schema {
  up () {
    this.raw(`CREATE VIEW daftar_satuan AS SELECT a.*,b.nm_jsatuan FROM satuan a JOIN jenis_satuan b ON a.id_jsatuan = b.id_jsatuan`);
  }

  down () {
    this.raw('DROP VIEW daftar_satuan');
  }
}

module.exports = BuatViewDaftarSatuanSchema
