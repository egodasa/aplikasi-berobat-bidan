'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')

class StoreJenisPengguna extends DefaultValidator {
  get rules () {
    return {
      nm_jpengguna: 'required|min:2|max:30',
    }
  }
}

module.exports = StoreJenisPengguna
