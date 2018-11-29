'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StoreJenisSatuan extends DefaultValidator {
  get rules () {
    return {
      nm_jsatuan: 'required|min:2|max:30'
    }
  }
  get messages () {
    return {
      ...Msg.required('nm_jsatuan', 'Nama Jenis Satuan'),
      ...Msg.minMax('nm_jsatuan', 'Nama Jenis Satuan', 2, 30)
    }
  }
}

module.exports = StoreJenisSatuan
