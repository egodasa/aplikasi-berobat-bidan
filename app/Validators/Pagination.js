'use strict'

class Pagination {
  static get DefaultRule () {
    return {
      perpage: "integer",
      page: "integer"
    }
  }
}
module.exports = Pagination
