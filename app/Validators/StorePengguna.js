'use strict'

class StorePengguna {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      username: 'required|min:2|max:12|unique:pengguna,username',
      password: 'required|min:3|max:12',
      email: 'required|email|unique:pengguna,email',
      id_jpengguna: 'required|integer'
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

module.exports = StorePengguna
