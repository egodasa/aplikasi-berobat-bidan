'use strict'
const { rule } = require('indicative')
const DefaultValidator = use('App/Validators/DefaultValidator')

class StoreJenisSatuan extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_jsatuan: 'required|min:2|max:30'
    }
  }
}

module.exports = StoreJenisSatuan
