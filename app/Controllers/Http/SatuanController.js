'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic')

class SatuanController extends RestApiBasic {
  constructor(){
    // Models name, array of fields for create, and array of fields for update
    super('satuan','id_satuan', ['nm_satuan', 'id_jsatuan'], ['nm_satuan', 'id_jsatuan'], 'daftar_satuan');
  }
}

module.exports = SatuanController
