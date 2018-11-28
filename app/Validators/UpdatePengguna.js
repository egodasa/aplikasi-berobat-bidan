'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')

class UpdatePengguna extends DefaultValidator {
  get rules () {
    return {
      password: 'required|min:3|max:12|unique:pengguna,username',
      email: 'required|email|unique:pengguna,email',
      id_jpengguna: 'required|integer'
    }
  }
}

module.exports = UpdatePengguna
