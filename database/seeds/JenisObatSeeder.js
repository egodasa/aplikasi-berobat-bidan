'use strict'

/*
|--------------------------------------------------------------------------
| JenisObatSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class JenisObatSeeder {
  async run () {
    await Database.insert([
      {nm_jobat: "Kapsul"},
      {nm_jobat: "Sirup"},
      {nm_jobat: "Serbuk"},
      {nm_jobat: "Suntik"},
      {nm_jobat: "Hisap"},
      {nm_jobat: "Salep"},
      {nm_jobat: "Lain-lain"}
    ]).into('jenis_obat');
  }
}
module.exports = JenisObatSeeder
