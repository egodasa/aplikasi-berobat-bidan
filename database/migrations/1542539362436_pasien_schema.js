'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasienSchema extends Schema {
  up () {
    this.create('pasien', (table) => {
      table.increments('id_pasien').primary();
      table.string('nm_pasien', 100);
      table.date('tgl_lahir');
      table.enu('jk', ['Laki-laki', 'Perempuan']);
      table.string('pekerjaan', 30);
      table.string('alamat');
    })
  }

  down () {
    this.drop('pasien')
  }
}

module.exports = PasienSchema
