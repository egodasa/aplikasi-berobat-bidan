'use strict'
const { rule } = require('indicative')
const Pagination = use('App/Validators/Pagination')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowObat extends DefaultValidator {
  get rules () {
    return {
      ...Pagination.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(asc|desc)\:(id_obat|nm_obat|stok|id_jobat|hrg_obat|id_satuan_obat)$/)
        ]
    }
  }
}

module.exports = ShowObat
