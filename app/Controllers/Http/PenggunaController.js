'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic')

class PenggunaController extends RestApiBasic {
  constructor(){
    // Models name, array of fields for create, and array of fields for update
    super('pengguna', 'id_pengguna',
    [
      'username',
      'password',
      'email',
      'id_jpengguna'
    ],
    [
      'email',
      'id_jpengguna'
    ],
    'daftar_pengguna');
  }
}

module.exports = PenggunaController
