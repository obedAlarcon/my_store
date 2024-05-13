const boom =require('@hapi/boom');
const {models}=require('../libs/sequelize');
const bcrypt =require('bcrypt')

class CustomerService{
    constructor(){}

    async find(){
        const response = await models.Customer.findAll({
            include:['user'] // aqui se hace la relacion con la tabñla user
        });
        return response;
    }
   async findOne(id){
    const customer = await models.Customer.findByPk(id);
    if(!customer){
        throw boom.notFound('Customer not found');

    }
    return user;
   }
    async create(data){
        //crea primeri el user con toda la data
        // este es diferente porque esta anidado con el usuario
        const hash= await bcrypt.hash(data.user.password, 10);
        const newData ={
            ...data,
            user:{
                ...data.user,
                password: hash
            }
            
        }
        const newCustomer=await models.Customer.create(newData,{
          include:['user']
          
        });
        delete newCustomer.user.dataValues.password;
        
        return newCustomer;
    }

    async update(id){
        const model = await this.findOne(id);
        const response = await model.update(changes);
        return response;
    }

    async delete(id){
          const model= await this.findOne(id);
          await model.destroy();
          return { response:true};
    }
}
module.exports=CustomerService;