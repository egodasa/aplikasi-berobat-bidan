'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic') 

class JenisObatController extends RestApiBasic{
  constructor () {
    super();
    this.table = 'jenis_obat'
    this.primaryKey = 'id_jobat'
    this.view = null
    this.storeFields = ['nm_jobat']
  }
}

module.exports = JenisObatController
