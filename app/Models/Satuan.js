'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Satuan extends Model {
  static get table(){
    return 'satuan'
  }
  static get primaryKey () {
    return 'id_satuan'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Satuan

