'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic') 

class PasienController extends RestApiBasic{
  constructor () {
    super();
    this.table = 'pasien'
    this.primaryKey = 'id_pasien'
    this.view = null
    this.storeFields = [
      'nm_pasien',
      'tgl_lahir',
      'jk',
      'pekerjaan',
      'alamat'
    ]
  }
}

module.exports = PasienController
