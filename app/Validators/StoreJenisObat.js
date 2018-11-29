'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StoreJenisObat extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_jobat: 'required|min:2|max:20'
    }
  }
  get messages () {
    return {
      ...Msg.required('nm_jobat', 'Nama Jenis Obat'),
      ...Msg.minMax('nm_jobat', 'Nama Jenis Obat', 2, 20)
    }
  }
}

module.exports = StoreJenisObat
