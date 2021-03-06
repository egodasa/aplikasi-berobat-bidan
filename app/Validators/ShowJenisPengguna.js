'use strict'
const { rule } = require('indicative')
const DefaultPaginationRules = use('App/Validators/DefaultPaginationRules')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowJenisPengguna extends DefaultValidator {
  get rules () {
    return {
      ...DefaultPaginationRules.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_jpengguna|nm_jpengguna)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowJenisPengguna
