'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic') 
 
class JenisSatuanController extends RestApiBasic{
  constructor () {
    super();
    this.table = 'jenis_satuan'
    this.primaryKey = 'id_jsatuan'
    this.view = 'daftar_obat'
    this.storeFields = ['nm_jsatuan']
  }
}

module.exports = JenisSatuanController
