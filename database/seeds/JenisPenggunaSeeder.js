'use strict'

/*
|--------------------------------------------------------------------------
| JenisPenggunaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class JenisPenggunaSeeder {
  async run () {
    await Database.insert([
      {nm_jpengguna: "Admin"}, 
      {nm_jpengguna: "Bidan"}, 
      {nm_jpengguna: "Apoteker"}, 
      {nm_jpengguna: "Pemilik"} 
    ]).into('jenis_pengguna');
  }
}

module.exports = JenisPenggunaSeeder
