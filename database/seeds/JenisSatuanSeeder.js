'use strict'

/*
|--------------------------------------------------------------------------
| JenisSatuanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class JenisSatuanSeeder {
  async run () {
    await Database.insert([
    {
      nm_jsatuan: "Berat",
    },
    {
      nm_jsatuan: "Panjang",
    },
    {
      nm_jsatuan: "Waktu",
    },
    {
      nm_jsatuan: "Banyak",
    },
    {
      nm_jsatuan: "Tekanan",
    }
    ]).into('jenis_satuan');
  }
}

module.exports = JenisSatuanSeeder
