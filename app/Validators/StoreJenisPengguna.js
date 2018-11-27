'use strict'

class StoreJenisPengguna {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_jpengguna: 'required|min:2|max:30',
    }
  }
  async fails (errorMessages) {
    let error_data = {
      result: false,
      error: {}
    }
    errorMessages.forEach((val, index)=>{
      // Every error added into error object on error_data variable
      error_data.error[val.field] =  val.message;
    });
    return this.ctx.response.status(400).send(error_data)
  }
}

module.exports = StoreJenisPengguna
