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
  async store({request, response}) {
    let data = await RestApiHelper.sanitizeFields(request.post(), this.storeFields);
    data.password = await Hash.make(data.password);
    return response.json(await this.store(this.table, data));
  }
}

module.exports = PenggunaController
