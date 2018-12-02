'use strict'
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')
const { rule } = require('indicative')

class StoreBeliObat extends DefaultValidator {
  get rules () {
    return {
      id_beli: 'required|min:1|max:50|unique:beli_obat,id_beli',
      waktu_beli: [
        rule('dateFormat', 'YYYY-MM-DD HH:mm:ss')
      ]
    }
  }
  get messages () {
    return {
      ...Msg.required('id_beli', 'Id Beli'),
      ...Msg.minMax('id_beli', 1,50),
      ...Msg.unique('id_beli', 'Id Beli'),
      ...Msg.dateFormat('waktu_beli', 'Waktu Beli', 'YYYY-MM-DD HH:mm:ss')
    }
  }
}

module.exports = StoreBeliObat
