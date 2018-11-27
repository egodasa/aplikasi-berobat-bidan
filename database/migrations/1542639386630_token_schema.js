'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokenSchema extends Schema {
  up () {
    
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokenSchema
