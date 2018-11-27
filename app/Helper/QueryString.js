'use strict'

class QueryString {
/*
 * rest(Object request, String default_sort)
 * request : Object with properties page (number) , perpage(number) and fields(string with comma separated)
 * default_sort : String, set default sort for collection. Format : 'column:asc or column:desc' 
 */
  static rest(request, default_sort){
    // Get page, perpage and fields value from request object.
    let page, per_page, fields;
    ({ page = 1 , per_page = 10, fields = ['*'] } = request);
    
    // Get sort object from request and parsed into array (column and ordering name, asc or desc
    let sort;
    ({ sort = default_sort } = request);
    sort = sort.split(':');
    
    // Get fields list and parse it into array
    // Fields will be parsed if it have more than 1 index
    if(fields.length > 1){
      fields = fields.split(',');
    }
    
    return {
      page: Number(page),
      perpage: Number(per_page),
      sort: sort,
      fields: fields
    }
  }
}

module.exports = QueryString
