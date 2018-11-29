'use strict'
const { rule } = require('indicative')
const DefaultPaginationRules = use('App/Validators/DefaultPaginationRules')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowJenisSatuan extends DefaultValidator {
  get rules () {
    return {
      ...DefaultPaginationRules.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_jsatuan|nm_jsatuan)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowJenisSatuan
