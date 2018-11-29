'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class UpdatePengguna extends DefaultValidator {
  get rules () {
    return {
      password: 'required|min:3|max:12|unique:pengguna,username',
      email: 'required|email|min:5|max:50|unique:pengguna,email',
      id_jpengguna: 'required|integer'
    }
  }
  get messages () {
    return {
      ...Msg.required('password', 'Password'),
      ...Msg.minMax('password', 'Password', 3, 12),
      ...Msg.required('email', 'Email'),
      ...Msg.email('email', 'Email'),
      ...Msg.minMax('email', 'Email', 5, 50),
      ...Msg.unique('email', 'Email'),
      ...Msg.required('id_jpengguna', 'Jenis Pengguna'),
      ...Msg.number('id_jpengguna', 'Jenis Pengguna', 'tidak valid')
    }
  }
}

module.exports = UpdatePengguna
