'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic') 
 
class JenisPenggunaController extends RestApiBasic{
  constructor () {
    super();
    this.table = 'jenis_pengguna'
    this.primaryKey = 'id_jpengguna'
    this.view = null
    this.storeFields = [
      'nm_jpengguna'
    ]
  }
}

module.exports = JenisPenggunaController
