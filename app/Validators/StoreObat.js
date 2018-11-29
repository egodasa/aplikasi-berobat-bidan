'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StoreObat extends DefaultValidator {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_obat: 'required|min:2|max:100',
      stok: 'required|integer',
      id_jobat: 'required|integer',
      hrg_obat: 'required|integer',
      id_satuan_obat: 'required|integer'
    }
  }
  get messages () {
    return {
      ...Msg.required('nm_obat', 'Nama Obat'),
      ...Msg.minMax('nm_obat', 'Nama Obat', 2, 100),
      ...Msg.required('stok', 'Stok Obat'),
      ...Msg.number('stok', 'Stok Obat'),
      ...Msg.required('id_jobat', 'Stok Obat'),
      ...Msg.number('id_jobat', 'Stok Obat','tidak valid'),
      ...Msg.required('hrg_obat', 'Harga Obat'),
      ...Msg.number('hrg_obat', 'Harga Obat'),
      ...Msg.required('id_satuan_obat', 'Satuan Obat'),
      ...Msg.number('id_satuan_obat', 'Satuan Obat','tidak valid')
    }
  }
}

module.exports = StoreObat
