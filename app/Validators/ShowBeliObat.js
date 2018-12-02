'use strict'
const { rule } = require('indicative')
const DefaultPaginationRules = use('App/Validators/DefaultPaginationRules')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowBeliObat extends DefaultValidator {
  get rules () {
    return {
      ...DefaultPaginationRules.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_beli|waktu_beli)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowBeliObat
