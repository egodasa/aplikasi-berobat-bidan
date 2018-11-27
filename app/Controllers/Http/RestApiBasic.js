'use strict'
const helper = use('App/Helper/QueryString') 
const Hash = use('Hash')
const Database = use('Database')

class RestApiBasic {
  /*
   * Constructor set model, fields for create data and fields for update data
   * model_name : Model instance
   * fields_create : list of fields for create data, should be array of string
   * fields_update : list of fields for update data, should be array of string
   * note :
   * if fields are password, it should be named 'password', so it will be hashed automaticly
   */
  constructor(table_name, pk, fields_create, fields_update, view_name = null){
    // this.table is table name.
    this.table = table_name;
    // this.view is view name. View name will be used if defined.
    this.view = view_name;
    // this.pk is primary key name
    this.primaryKey = pk;
    // this.fieldsCreate is a list of fields for create data, should be array of string
    this.fieldsCreate = fields_create;
    // this.fieldsUpdate is a list of fields for update data, should be array of string
    this.fieldsUpdate = fields_update;
  }
  /*
   * show({request, response})
   * request : instance of http request
   * response : instance of http response 
   * show() method for showing collection of data
   */
  async show({request, response}){
    try{
      let result = {}
      let selectedTable = this.view || this.table
      // page, perpage, sort and fields are query string from url
      let page, perpage, sort, fields;
      
      // helper.rest method will give default value for above variable
      ({ page, perpage, sort, fields } = helper.rest(request.get(), `${this.primaryKey}:asc`))
      
      const count = await Database.from(selectedTable).count(`${this.primaryKey} AS total`);
      
      result.page = Number(page);
      result.perpage = Number(perpage);
      result.total = count[0].total;
      result.lastPage = Math.ceil(result.total/result.perpage);
      result.data = await Database.table(selectedTable)
        .select(fields) // select custom fields from 'fields' query string
        .orderBy(sort[0], sort[1]) // sort[0] is the column name, sort[1] can be asc or desc
        .forPage(page, perpage); // paginate the result of collection data
      
      // return the collection of data with other properties such as total, page, perpage, nextpage, prevpage and data itself as array of object
      return response.json(result);
    }catch(e){
      console.log(e);
      
      // any error will be catch on here
      return response.status(503).json({result: false, error: e});
    }
  }
  async detail({params, response}){
    try{
      const satuan = await Database.table(this.view || this.table).select().where(this.primaryKey, params.id).first();
      return response.json(satuan);
    }catch(e){
      console.log(e);
      return response.status(503).json({result: false, error: e});
    }
  }
  async store({request, response}){
    try{
      const model = {};
      
      const data = request.post();
      
      this.fieldsCreate.forEach(async (val)=>{
        if(val.includes('password')){
          model[val] = await Hash.make(data[val]);
        }else{
          model[val] = data[val];
        }
      })
      await Database.insert(model).into(this.table);
      return response.status(201).json({result: true});
    }catch(e){
      console.log(e);
      return response.status(503).json({result: false, error: e});
    }
  }
  async update({request, response, params, session}){
    try{
      const data = request.post();
      let updated_data = {};
      this.fieldsUpdate.forEach(async (val)=>{
        if(val.includes('password')){
          updated_data[val] = await Hash.make(data[val]);
        }else{
          updated_data[val] = data[val];
        }
      })
      await Database.table(this.table)
        .where(this.model.primaryKey, params.id)
        .update(updated_data);
      return response.status(200).json({result: true});
    }catch(e){
      console.log(e);
      return response.status(503).json({result: false, error: e});
    }
  }
  async remove({params, response}){
    try{
      await Database.table(this.table)
        .where(this.primaryKey, params.id)
        .delete();
      return response.status(204).json({result: true});
    }catch(e){
      console.log(e);
      return response.status(503).json({result: false, error: e});
    }
  }
}

module.exports = RestApiBasic
