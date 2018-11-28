'use strict'
const { rule } = require('indicative')
const DefaultValidator = use('App/Validators/DefaultValidator')

class StoreJenisObat extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_jobat: 'required|min:2|max:20'
    }
  }
}

module.exports = StoreJenisObat
