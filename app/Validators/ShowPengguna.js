'use strict'
const { rule } = require('indicative')
const Pagination = use('App/Validators/Pagination')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowPengguna extends DefaultValidator {
  get rules () {
    return {
      ...Pagination.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(asc|desc)\:(id_pengguna|username|email|id_jpengguna|nm_jpengguna)$/)
        ]
    }
  }
}

module.exports = ShowPengguna
