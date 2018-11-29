'use strict'
const { rule } = require('indicative')
const DefaultValidator = use('App/Validators/DefaultValidator')
const Msg = use('App/Helper/MessageGenerator')

class StorePasien extends DefaultValidator {
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
  get messages () {
    return {
      ...Msg.required('nm_pasien', 'Nama Pasien'),
      ...Msg.minMax('nm_pasien', 'Nama Pasien', 2, 100),
      ...Msg.required('tgl_lahir', 'Tanggal Lahir'),
      ...Msg.dateFormat('tgl_lahir', 'Tanggal Lahir','YYYY-MM-DD'),
      ...Msg.required('jk', 'Jenis Kelamin'),
      ...Msg.choices('jk', 'Jenis Kelamin', ['Laki-laki', 'Perempuan']),
      ...Msg.required('alamat', 'Alamat'),
      ...Msg.minMax('alamat', 'Alamat', 3, 255),
      ...Msg.required('pekerjaan', 'Pekerjaan'),
      ...Msg.minMax('pekerjaan', 'Pekerjaan', 2, 100)
    }
  }
}

module.exports = StorePasien
