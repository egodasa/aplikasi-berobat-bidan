'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
