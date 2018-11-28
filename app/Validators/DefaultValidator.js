'use strict'

class DefaultValidator {
  get validateAll () {
    return true
  }
  async fails (errorMessages) {
    let error_data = {
      code: 400,
      messages: errorMessages
    }
    return this.ctx.response.status(400).send(error_data);
  }
}
module.exports = DefaultValidator
