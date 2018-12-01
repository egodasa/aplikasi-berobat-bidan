'use strict'
const Database = use('Database')
/*
 * This class is intended for creating Restful API endpoint.
 * It include basic CRUD method.
 */
class RestApiMethod {
  /*
   * show(String table, String primaryKey, Object queryString)
   * table : It define which table or view should be fetched.
   * primaryKey : Primary key or any index of a table. It will be used for counting a total of rows have been fetched.
   * queryString (optional): An object with 'page','perpage','sort' and 'fields' key.
   */
  static async show(table, primaryKey, queryString = {}){
    // Define default value for result of this method
    let result = {
      code: 200,
      messages: 'Ok'
    }
    try{
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
    let result = {
      code: 200,
      messages: "Ok"
    }
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
    let result = {
      code: 201,
      messages: "Ok"
    }
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
    let result = {
      code: 201,
      messages: "Ok"
    }
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
}

module.exports = RestApiMethod
