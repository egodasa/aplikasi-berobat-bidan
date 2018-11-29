'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StoreJenisPengguna extends DefaultValidator {
  get rules () {
    return {
      nm_jpengguna: 'required|min:2|max:30',
    }
  }
  get messages () {
    return {
      ...Msg.required('nm_jpengguna', 'Nama Jenis Pengguna'),
      ...Msg.minMax('nm_jpengguna', 'Nama Jenis Pengguna', 2, 30)
    }
  }
}

module.exports = StoreJenisPengguna
