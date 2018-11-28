'use strict'
const { rule } = require('indicative')
const Pagination = use('App/Validators/Pagination')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowJenisSatuan extends DefaultValidator {
  get rules () {
    return {
      ...Pagination.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(asc|desc)\:(id_jsatuan|nm_jsatuan)$/)
        ]
    }
  }
}

module.exports = ShowJenisSatuan
