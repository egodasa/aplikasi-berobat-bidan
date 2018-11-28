'use strict'
const { rule } = require('indicative')
const Pagination = use('App/Validators/Pagination')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowSatuan extends DefaultValidator {
  get rules () {
    return {
      ...Pagination.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_satuan|nm_satuan)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowSatuan
