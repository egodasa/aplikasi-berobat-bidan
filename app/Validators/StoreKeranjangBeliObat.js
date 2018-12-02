'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')
const { rule } = require('indicative')

class StoreBeliKeranjangObat extends DefaultValidator {
  get rules () {
    return {
      id_beli: 'required|min:1|max:50|unique:beli_obat,id_beli',
      id_obat: 'required|integer',
      jumlah: 'required|integer'
    }
  }
  get messages () {
    return {
      ...Msg.required('id_beli', 'Id Beli'),
      ...Msg.minMax('id_beli', 1,50),
      ...Msg.unique('id_beli', 'Id Beli'),
      ...Msg.required('id_obat', 'Id Obat'),
      ...Msg.number('id_obat', 'Id Obat'),
      ...Msg.required('jumlah', 'Jumlah'),
      ...Msg.number('jumlah', 'Jumlah')
    }
  }
}

module.exports = StoreBeliKeranjangObat
