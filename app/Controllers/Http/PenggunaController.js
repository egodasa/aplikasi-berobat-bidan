'use strict'
const RestApiBasic = use('App/Helper/RestApiBasic')
const RestApiHelper = use('App/Helper/RestApiHelper') 
const Hash = use('Hash')

class PenggunaController extends RestApiBasic {
  constructor () {
    super();
    this.table = 'pengguna'
    this.primaryKey = 'id_pengguna'
    this.view = 'daftar_pengguna'
    this.storeFields = [
      'username',
      'password',
      'email',
      'id_jpengguna'
    ]
    this.updateFields = [
      'email',
      'id_jpengguna'
    ]
  }
  // Overide RestApiBasic method, because password should be hashed
  async dataStoreCallback(dataObject) {
    let data = await RestApiHelper.sanitizeFields(dataObject, this.storeFields);
    data.password = await Hash.make(data.password);
    return data;
  }
}

module.exports = PenggunaController
