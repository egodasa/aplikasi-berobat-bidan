'use strict'
const { rule } = require('indicative')
const DefaultPaginationRules = use('App/Validators/DefaultPaginationRules')
const DefaultValidator = use('App/Validators/DefaultValidator')

class ShowKeranjangBeliObat extends DefaultValidator {
  get rules () {
    return {
      ...DefaultPaginationRules.DefaultRule, // Include page and perpage validation to numbers only
      sort: [
          rule('regex', /^(id_detail|id_obat|jumlah|id_beli|nm_obat|nm_satuan|sub_total)\:(asc|desc)$/)
        ]
    }
  }
}

module.exports = ShowKeranjangBeliObat
