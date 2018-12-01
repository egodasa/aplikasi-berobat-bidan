'use strict'
const Database = use('Database')
/*
 * This class is intended for rest api. It include basic crud method for rest api endpoint. 
 */
class RestApiMethod {
  static async show(table, primaryKey, queryString){
    let result = {}
    result.code = 200;
    result.messages = "Ok";
    try{
      // page, perpage, sort and fields are query string from url
      let page = queryString.page || 1;
      let perpage = queryString.perpage || 10;
      let sort = null
      if(queryString.sort){
        sort = queryString.sort.split(':');
      }else{
        sort = [primaryKey, 'asc'];
      }
      let fields = null
      if(queryString.fields){
        fields = queryString.fields.split(',');
      }else{
        fields = ['*'];
      }
      console.log(fields);
      console.log(sort);
      const count = await Database.from(table).count(`${primaryKey} AS total`);
      
      result.page = Number(page);
      result.perpage = Number(perpage);
      result.total = count[0].total;
      result.lastPage = Math.ceil(result.total/result.perpage);
      result.data = await Database.table(table)
        .select(fields) // select custom fields from 'fields' query string
        .orderBy(sort[0], sort[1]) // sort[0] is the column name, sort[1] can be asc or desc
        .forPage(page, perpage); // paginate the result of collection data
      
      if(result.total == 0){
        result.code = 204;
        result.messages = "No Data";
      }
      
      // return the collection of data with other properties such as total, page, perpage, nextpage, prevpage and data itself as array of object
      return result;
    }catch(e){
      console.log(e);
      result.code = 503;
      result.messages = e
      // any error will be catch on here
      return result;
    }
  }
  static async detail(table, primaryKey, id){
    let result = {}
    result.code = 200;
    result.messages = "Ok";
    try{
      result.data = await Database.table(table).select().where(primaryKey, id).first();
      if(Object.keys(result.data) == 0){
        result.code = 204;
        result.messages = "No Data";
      }
      return result;
    }catch(e){
      console.log(e);
      result.code = 503;
      result.messages = e;
      return result;
    }
  }
  static async store(table, data){
    let result = {}
    result.code = 201;
    result.messages = "Ok";
    try{
      await Database.insert(data).into(table);
      return result;
    }catch(e){
      console.log(e);
      result.code = 503;
      result.messages = e;
      return result;
    }
  }
  static async update(table, data, primaryKey, id){
    let result = {}
    result.code = 201;
    result.messages = "Ok";
    try{
      await Database.table(table)
        .where(primaryKey, id)
        .update(data);
      return result;
    }catch(e){
      console.log(e);
      result.code = 503;
      result.messages = e;
      return result;
    }
  }
  static async remove(table, primaryKey, id){
    let result = {}
    result.code = 204;
    result.messages = "Ok";
    try{
      await Database.table(table)
        .where(primaryKey, id)
        .delete();
      return result;
    }catch(e){
      console.log(e);
      result.code = 503;
      result.messages = e;
      return result;
    }
  }
  static async sanitizeFields (oldObj, listFields) {
    let result = {}
    listFields.forEach((val)=>{
      result[val] = oldObj[val]
    });
    return result
  }
}

module.exports = RestApiMethod
