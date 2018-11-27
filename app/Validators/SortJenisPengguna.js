'use strict'
const { rule } = require('indicative')
const JsonErrorMessages = use('App/Helper/JsonErrorMessages')

class SortJenisPengguna extends JsonErrorMessages{
  constructor(){
    super();
    super.setRules({
      sort: [
          rule('regex', /.+\:.+/)
        ]
    });
  }
}

module.exports = SortJenisPengguna
