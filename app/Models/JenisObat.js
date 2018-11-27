'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JenisObat extends Model {
  static get table(){
    return 'jenis_obat'
  }
  static get primaryKey () {
    return 'id_jobat'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = JenisObat
