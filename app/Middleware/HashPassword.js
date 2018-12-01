'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Hash = use('Hash')

class HashPassword {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    // hash password before reach controller
    request.post()['password'] = await Hash.make(request['password']);
    await next()
  }
}

module.exports = HashPassword
