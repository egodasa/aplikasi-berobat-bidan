'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ViewDaftarBeliObatDetailSchema extends Schema {
  up () {
    // View untuk mempersingkat query join antara obat,satuan dengan beli_obat_detail dan tmp
    this.raw(`
      CREATE VIEW daftar_beli_obat_detail AS 
      SELECT a.*,
      b.nm_obat,
      b.nm_satuan,
      b.hrg_obat,
      (a.jumlah*b.hrg_obat) AS sub_total
      from beli_obat_detail a 
      join daftar_obat b on a.id_obat = b.id_obat
      GROUP BY a.id_obat;
    `);
    this.raw(`
      CREATE VIEW daftar_beli_obat_detail_tmp AS 
      SELECT a.*,
      b.nm_obat,
      b.nm_satuan ,
      (a.jumlah*b.hrg_obat) AS sub_total
      from beli_obat_detail_tmp a 
      join daftar_obat b on a.id_obat = b.id_obat
      GROUP BY a.id_obat;
    `);
  }

  down () {
    this.raw('DROP VIEW daftar_beli_obat_detail');
    this.raw('DROP VIEW daftar_beli_obat_detail_tmp');
  }
}

module.exports = ViewDaftarBeliObatDetailSchema
