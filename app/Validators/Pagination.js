'use strict'

class Pagination {
  static get DefaultRule () {
    return {
      perpage: "integer",
      page: "integer"
    }
  }
  static get DefaultMessages () {
    return {
      'perpage.integer': 'Query String perpage should be number.',
      'page.integer': 'Query String page should be number.'
    }
  }
}
module.exports = Pagination
