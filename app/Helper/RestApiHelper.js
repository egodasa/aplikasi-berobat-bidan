'use strict'
class RestApiHelper {
  static async sanitizeFields (oldObj, listFields) {
    let result = {}
    listFields.forEach((val)=>{
      result[val] = oldObj[val]
    });
    return result
  }
}

module.exports = RestApiHelper
