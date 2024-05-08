const boom = require('@hapi/boom');


const {models}=require('./../libs/sequelize');
const { Product } = require('../db/models/product.model');

class CategoryService {

  constructor(){
   

  }

  async find() {
 
    // const query= 'SELECT * FROM users';
    const categories = await models.Category.findAll();
    return categories;
    
   }
    
  async findOne(id) {
    const category = await models.Category.findByPk(id,{
      include:['products']
    });
   return category;
   
    
    // devuelve todo los producr¿tos relacionados a esta ca
  }

  async create(data) {

    const newCategory = await models.Category.create(data,{
      include:['products']
    });
    return newCategory;
    // esta es la creacion de la categoria
  }

   async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
