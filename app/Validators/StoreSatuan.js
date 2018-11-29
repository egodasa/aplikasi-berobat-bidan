'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StoreSatuan extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_satuan: 'required|min:2|max:50',
      id_jsatuan: 'required|integer',
    }
  }
  get messages () {
    return {
      ...Msg.required('nm_satuan', 'Nama Satuan'),
      ...Msg.minMax('nm_satuan', 'Nama Satuan', 2, 50),
      ...Msg.required('id_jsatuan', 'Jenis Satuan'),
      ...Msg.number('id_jsatuan', 'Jenis Satuan', 'tidak valid')
    }
  }
}

module.exports = StoreSatuan
