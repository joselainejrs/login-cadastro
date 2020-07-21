const connection = require('../database/connection');

module.exports = {
  //login
  async create( request, response){
      const { codigo, password } = request.body;

     const users =  await connection('users')
     .where('codigo', codigo)
     .where('password', password)
     .select('username')
     .first();

     if(!users){
       return response.status(400).json({ error: 'No User found with this ID'});
     }

      return response.json(users);
  }

 
}