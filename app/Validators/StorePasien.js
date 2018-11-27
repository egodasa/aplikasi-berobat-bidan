'use strict'
const { rule } = require('indicative')

class StorePasien {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_pasien: 'required|min:2|max:100',
      tgl_lahir: [
          rule('required'),
          rule('dateFormat', 'YYYY-MM-DD')
        ],
      jk: 'required|in:Laki-laki,Perempuan',
      pekerjaan: 'required|min:1|max:30',
      alamat: 'required|min:3|max:255'
    }
  }
}

module.exports = StorePasien
