'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StorePengguna extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      username: 'required|min:3|max:12|unique:pengguna,username',
      password: 'required|min:3|max:12',
      email: 'required|email|min:5|max:50|unique:pengguna,email',
      id_jpengguna: 'required|integer'
    }
  }
  get messages () {
    return {
      ...Msg.required('username', 'Username'),
      ...Msg.minMax('username', 'Username', 2, 12),
      ...Msg.unique('username', 'Username'),
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

module.exports = StorePengguna
