'use strict'
const RestApiMethod = use('App/Helper/RestApiMethod') 
const RestApiHelper = use('App/Helper/RestApiHelper') 

class RestApiBasic {
  // Example
  //~ constructor () {
      //~ this.table = 'jenis_obat'
      //~ this.primaryKey = 'id_jobat'
      //~ this.view = null
      //~ this.storeFields = ['nm_jobat']
      //~ this.updateFields = ['nm_jobat'] OR same as storeFields
  //~ }
  async show({request, response}) {
    return response.json(await RestApiMethod.show(this.view || this.table, this.primaryKey, request.get()));
  }
  async detail({response, params}){
    return response.json(await RestApiMethod.detail(this.view || this.table, this.primaryKey, params.id));
  }
  async store({request, response}) {
    let data = await RestApiHelper.sanitizeFields(request.post(), this.storeFields);
    return response.json(await RestApiMethod.store(this.table, data));
  }
  async update({request, response, params}) {
    let data = await RestApiHelper.sanitizeFields(request.post(), this.updateFields || this.storeFields);
    return response.json(await RestApiMethod.update(this.table, data, this.primaryKey, params.id));
  }
  async remove({response, params}) {
    return response.json(await RestApiMethod.remove(this.table, this.primaryKey, params.id));
  }
}

module.exports = RestApiBasic
