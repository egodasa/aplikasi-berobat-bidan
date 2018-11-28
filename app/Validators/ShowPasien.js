'use strict'
const { rule } = require('indicative')
const Pagination = use('App/Validators/Pagination')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowPasien extends DefaultValidator {
  get rules () {
    return {
      ...Pagination.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_pasien|nm_pasien|tgl_lahir|jk|pekerjaan|alamat)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowPasien
