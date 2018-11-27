'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pengguna extends Model {
  static get table(){
    return 'pengguna'
  }
  static get primaryKey () {
    return 'id_pengguna'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  static get hidden () {
    return ['password']
  }
}

module.exports = Pengguna
