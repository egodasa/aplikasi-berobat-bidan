'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JenisPengguna extends Model {
  static get table(){
    return 'jenis_pengguna'
  }
  static get primaryKey () {
    return 'id_jpengguna'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = JenisPengguna
