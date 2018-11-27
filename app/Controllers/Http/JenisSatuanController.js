'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic') 
 
class JenisSatuanController extends RestApiBasic{
  constructor(){
    super('jenis_satuan', 'id_jsatuan', ['nm_jsatuan'], ['nm_jsatuan']);
  }
}

module.exports = JenisSatuanController
