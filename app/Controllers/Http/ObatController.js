'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic')

class ObatController extends RestApiBasic {
  constructor () {
    super();
    this.table = 'obat'
    this.primaryKey = 'id_obat'
    this.view = 'daftar_obat'
    this.storeFields = [
      'nm_obat',
      'stok',
      'id_jobat',
      'hrg_obat',
      'id_satuan_obat'
    ]
    this.updateFields = [
      'nm_obat',
      'stok',
      'id_jobat',
      'hrg_obat',
      'id_satuan_obat'
    ]
  }
}

module.exports = ObatController
