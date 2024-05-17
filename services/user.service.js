const boom = require('@hapi/boom');

//requerimos la conexion desde el archiivo postgres.js

 const bcrypt =require('bcrypt')
 const { models}=require('./../libs/sequelize')


class UserService {
  constructor() {
  



// con esto  ya poidemos utilizar este poool en la app
  }

  async create(data) {
    const hash= await bcrypt.hash(data.password, 10)// traemo el hash despara validar desde  pass.verify
    const newUser= await models.User.create({
      ...data,
      password:hash
     });
    delete newUser.dataValues.password;
    return newUser;
  }



  async find() {
    const response= await models.User.findAll({
      include:['customer']// esta es la asociaocion con la tabla customer
    });
  

    return response;
    // este servicio esta connectado a la capa de rutas 
  }


  async findByEmail(email){
    const response = await models.User.findOne({
      where:{email}
    });
    return response;
  }
  

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
     throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user= await this.findOne(id);// metodo de actualizar, traemos el findOne para reutilizar codigo
   const response = await user.update(changes); 
    
    return response;
    }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
