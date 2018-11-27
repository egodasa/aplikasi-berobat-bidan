'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JenisSatuan extends Model {
  static get table(){
    return 'jenis_satuan'
  }
  static get primaryKey () {
    return 'id_jsatuan'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = JenisSatuan
