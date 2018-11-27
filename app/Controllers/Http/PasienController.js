'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic') 

class PasienController extends RestApiBasic{
  constructor(){
    super('pasien', 'id_pasien',
    [
      'nm_pasien',
      'tgl_lahir',
      'jk',
      'pekerjaan',
      'alamat'
    ],
    [
      'nm_pasien',
      'tgl_lahir',
      'jk',
      'pekerjaan',
      'alamat'
    ]);
  }
}

module.exports = PasienController
