'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pasien extends Model {
  static get table(){
    return 'pasien'
  }
  static get primaryKey () {
    return 'id_pasien'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Pasien
