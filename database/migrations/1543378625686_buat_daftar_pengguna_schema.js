'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuatDaftarPenggunaSchema extends Schema {
  up () {
    this.raw(`CREATE VIEW 
      daftar_pengguna AS SELECT a.*,
      b.nm_jpengguna 
      FROM pengguna a
      JOIN jenis_pengguna b ON a.id_jpengguna = b.id_jpengguna`);
    }

  down () {
    this.raw(`DROP VIEW daftar_pengguna`);
  }
}

module.exports = BuatDaftarPenggunaSchema
