'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Obat extends Model {
  static get table(){
    return 'obat'
  }
  static get primaryKey () {
    return 'id_obat'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Obat
