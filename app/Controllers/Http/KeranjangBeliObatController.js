'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic')
const RestApiMethod = use('App/Helper/RestApiMethod')
class KeranjangBeliObat extends RestApiBasic {
  constructor () {
    super();
    this.table = 'beli_obat_detail_tmp'
    this.primaryKey = 'id_detail'
    this.view = null
    this.storeFields = ['id_obat', 'jumlah','id_beli']
  }
  async detail({response, params}){
    return response.json(await RestApiMethod.detail(this.view || this.table, 'id_beli', params.id));
  }
}

module.exports = KeranjangBeliObat
