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
    const data = await this.dataStoreCallback(request.post());
    return response.json(await RestApiMethod.store(this.table, data));
  }
  async update({request, response, params}) {
    const data = await this.dataUpdateCallback(request.post());
    return response.json(await RestApiMethod.update(this.table, data, this.primaryKey, params.id));
  }
  async remove({response, params}) {
    return response.json(await RestApiMethod.remove(this.table, this.primaryKey, params.id));
  }
  async bulkDeletes({response, request}) {
    const removed = request.post();
    return response.json(await RestApiMethod.bulkDeletes(this.table, this.primaryKey, removed[this.primaryKey]));
  }
  async dataStoreCallback(data) {
    return await RestApiHelper.sanitizeFields(data, this.storeFields);
  }
  async dataUpdateCallback(data) {
    return await RestApiHelper.sanitizeFields(data, this.updateFields || this.storeFields);
  }
}

module.exports = RestApiBasic
