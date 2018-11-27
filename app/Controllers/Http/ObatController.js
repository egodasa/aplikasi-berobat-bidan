'use strict'
const RestApiBasic = use('App/Controllers/Http/RestApiBasic')

class ObatController extends RestApiBasic {
  constructor(){
    super('obat', 'id_obat',
    [
      'nm_obat',
      'stok',
      'id_jobat',
      'hrg_obat',
      'id_satuan_obat'
    ],
    [
      'nm_obat',
      'stok',
      'id_jobat',
      'hrg_obat',
      'id_satuan_obat'
    ]);
  }
}

module.exports = ObatController
