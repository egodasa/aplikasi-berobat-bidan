'use strict'

class AutentikasiController {
  async autentikasi({response, request, auth}){
    const { username, password } = request.post();
    try{
      const data = await auth.attempt(username, password)
      return response.json({result: true, data: data});
    }catch(e){
      return response.json({result: false, error: "Username atau Password Salah!"});
    }
  }
}

module.exports = AutentikasiController
