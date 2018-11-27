'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic') 

class JenisObatController extends RestApiBasic {
  constructor(){
    // Models name, array of fields for create, and array of fields for update
    super('jenis_obat','id_jobat', ['nm_jobat'], ['nm_jobat']);
  }
}

module.exports = JenisObatController
