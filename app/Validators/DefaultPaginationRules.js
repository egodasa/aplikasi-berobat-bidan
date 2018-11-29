'use strict'
/*
 * This class defined default rules and message for pagination.
 * It include page and perpage query string validation.
 */
class DefaultPaginationRules {
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
module.exports = DefaultPaginationRules
