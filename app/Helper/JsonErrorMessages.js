'use strict'

class JsonErrorMessages {
  constructor(){
  }
  get validateAll () {
    return true
  }
  setRules(obj_rules){
    // Default rules for query string on rest api
    let default_rules = {
      perpage: "integer",
      page: "integer"
    }
    this.rules = Object.assign(default_rules, obj_rules);
  }

  //~ async fails (errorMessages) {
    //~ let error_data = {
      //~ result: false,
      //~ error: {}
    //~ }
    //~ errorMessages.forEach((val, index)=>{
      //~ // Every error added into error object on error_data variable
      //~ error_data.error[val.field] =  val.message;
    //~ });
    //~ return this.ctx.response.status(400).send(error_data)
  //~ }
}

module.exports = JsonErrorMessages
