'use strict'
const { rule } = require('indicative')
const DefaultPaginationRules = use('App/Validators/DefaultPaginationRules')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowObat extends DefaultValidator {
  get rules () {
    return {
      ...DefaultPaginationRules.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_obat|nm_obat|stok|id_jobat|hrg_obat|id_satuan_obat)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowObat
