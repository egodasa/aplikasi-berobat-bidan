'use strict'

class DefaultValidator {
  static async fails (errorMessages) {
    let error_data = {
      code: 400,
      messages: errorMessages
    }
    return this.ctx.response.status(400).json(error_data);
  }
}
module.exports = DefaultValidator