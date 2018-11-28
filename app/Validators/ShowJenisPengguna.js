'use strict'
const { rule } = require('indicative')
const Pagination = use('App/Validators/Pagination')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowJenisPengguna extends DefaultValidator {
  get rules () {
    return {
      ...Pagination.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_jpengguna|nm_jpengguna)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowJenisPengguna
