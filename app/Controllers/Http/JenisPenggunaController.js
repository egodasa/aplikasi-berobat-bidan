'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic') 
 
class JenisPenggunaController extends RestApiBasic{
  constructor(){
    // Models name, array of fields for create, and array of fields for update
    super('jenis_pengguna', 'id_jpengguna',
    [
      'nm_jpengguna'
    ],
    [
      'nm_jpengguna'
    ]);
  }
}

module.exports = JenisPenggunaController
