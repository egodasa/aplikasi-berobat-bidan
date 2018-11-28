'use strict'
const { rule } = require('indicative')
const DefaultValidator = use('App/Validators/DefaultValidator')

class StoreObat extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_obat: 'required|min:2|max:100',
      stok: 'required|integer',
      id_jobat: 'required|integer',
      hrg_obat: 'required|integer',
      id_satuan_obat: 'required|integer'
    }
  }
}

module.exports = StoreObat
