'use strict'
const { rule } = require('indicative')
const DefaultValidator = use('App/Validators/DefaultValidator')

class StoreSatuan extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_satuan: 'required|min:2|max:50'
    }
  }
}

module.exports = StoreSatuan
