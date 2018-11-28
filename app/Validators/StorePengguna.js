'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')

class StorePengguna extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      username: 'required|min:2|max:12|unique:pengguna,username',
      password: 'required|min:3|max:12',
      email: 'required|email|unique:pengguna,email',
      id_jpengguna: 'required|integer'
    }
  }
}

module.exports = StorePengguna
