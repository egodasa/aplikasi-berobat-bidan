'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic')

class SatuanController extends RestApiBasic {
  constructor () {
    super();
    this.table = 'satuan'
    this.primaryKey = 'id_satuan'
    this.view = null
    this.storeFields = ['nm_satuan', 'id_jsatuan']
    this.updateFields = 'daftar_satuan'
  }
}

module.exports = SatuanController
