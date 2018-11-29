'use strict'

/*
|--------------------------------------------------------------------------
| SatuanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SatuanSeeder {
  async run () {
    await Database.insert([
      {nm_satuan: 'Kg',	    id_jsatuan: 1},
      {nm_satuan: 'Hg',	    id_jsatuan: 1},
      {nm_satuan: 'Dag',	  id_jsatuan: 1},
      {nm_satuan: 'Gr',	    id_jsatuan: 1},
      {nm_satuan: 'Cg',	    id_jsatuan: 1},
      {nm_satuan: 'Mg',	    id_jsatuan: 1},
      {nm_satuan: 'Km',	    id_jsatuan: 2},
      {nm_satuan: 'Hm',	    id_jsatuan: 2},
      {nm_satuan: 'Dam',    id_jsatuan: 2},
      {nm_satuan: 'M',	    id_jsatuan: 2},
      {nm_satuan: 'Dm',	    id_jsatuan: 2},
      {nm_satuan: 'Cm',	    id_jsatuan: 2},
      {nm_satuan: 'Mm',	    id_jsatuan: 2},
      {nm_satuan: 'Detik',	id_jsatuan: 3},
      {nm_satuan: 'Menit',	id_jsatuan: 3},
      {nm_satuan: 'Jam',	  id_jsatuan: 3},
      {nm_satuan: 'Hari',	  id_jsatuan: 3},
      {nm_satuan: 'Minggu',	id_jsatuan: 3},
      {nm_satuan: 'Bulan',	id_jsatuan: 3},
      {nm_satuan: 'Tahun',	id_jsatuan: 3},
      {nm_satuan: 'Dg',	    id_jsatuan: 1},
      {nm_satuan: 'Pcs',	  id_jsatuan: 4},
      {nm_satuan: 'Lembar',	id_jsatuan: 4},
      {nm_satuan: 'Tablet',	id_jsatuan: 4},
      {nm_satuan: 'Buah',	  id_jsatuan: 4},
      {nm_satuan: 'MMHG',	  id_jsatuan: 5},
      {nm_satuan: 'Botol',	id_jsatuan: 4},
      {nm_satuan: 'Sachet',	id_jsatuan: 4}
    ]).into('satuan');
  }
}

module.exports = SatuanSeeder
