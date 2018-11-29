'use strict'
/*
 * Class for generate error message on validator 
 */
class MessageGenerator {
  static required(name, caption, message = "tidak boleh kosong"){
    return {
      [`${name}.required`]: `${caption} ${message}`
    }
  }
  static minMax(name, caption, min, max){
    return {
      [`${name}.min`]: `${caption} minimal ${min} karakter dan ${max} karakter`,
      [`${name}.max`]: `${caption} minimal ${min} karakter dan ${max} karakter`
    }
  }
  static dateFormat(name, caption, dateFormat){
    return {
      [`${name}.dateFormat`]: `${caption} harus memiliki format penulisan ${dateFormat}`
    }
  }
  static number(name, caption, message = 'harus berupa angka'){
    return {
      [`${name}.integer`]: `${caption} ${message}`
    }
  }
  static choices(name, caption, choice_list){ 
    let length = choice_list.length;
    let result = ""
    if(length == 1){
      result = choice_list[0]
    }else if(length == 2){
      result = choice_list.join(" atau ");
    }else{
      let choices = ""
      choice_list.forEach((val, index)=>{
        if(length - index == 2){
          choices+= "${val} atau ";
        }else if(length == index) {
          choices+= "${val}";
        }else{
          choices+= "${val},";
        }
      });
    }
    return {
      [`${name}.in`]: `${caption} harus salah satu dari ${result}`
    }
  }
  static unique(name, caption, message = 'sudah dipakai atau tidak tersedia'){
    return {
      [`${name}.unique`]: `${caption} ${message}`
    }
  }
  static email(name, caption, message = 'tidak valid'){
    return {
      [`${name}.email`]: `${caption} ${message}`
    }
  }
}

module.exports = MessageGenerator
