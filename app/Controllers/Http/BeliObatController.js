'use strict'
const Database = use('Database')
const RestApiBasic = use('App/Helper/RestApiBasic')

class BeliObat extends RestApiBasic {
  async store({request, response}){
    let result = {}
    result.code = 204;
    result.messages = "Ok";
    try{
      // Get posted data
      const data = request.post();
      
      const trx = await Database.beginTransaction();
      
      const dataBeliObat = {
        id_beli: data.id_beli,
        waktu_beli: data.waktu_beli
      }
      await trx.insert(dataBeliObat).into('beli_obat');
      
      await trx.insert(Database.select('*').from('beli_obat_detail_tmp').where('id_beli',data.id_beli)).into('beli_obat_detail');
      
      await trx.table('beli_obat_detail_tmp').where('id_beli',data.id_beli).del();
      
      await trx.commit();
      return response.send(result);
    }catch(e){
      console.log(e);
      result.code = 503;
      result.messages = e;
      return response.send(result);
    }
  }
}

module.exports = BeliObat
